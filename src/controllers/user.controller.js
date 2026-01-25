import { asyncHandler } from "../utility/asyncHandler.js"
import {ApiError} from "../utility/ApiError.js"
import { User } from "../models/User.model.js";
import { uploadOnCloudinary } from "../utility/cloudinary.js";
import { ApiResponse } from "../utility/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {

    //1. get user details from frontend
    //2. validation chek is not empty
    //3. check if user already exists : Username, email
    //4. check for images, chek for avatar
    //5. upload them to cloudnairy, avatar
    //6. create user object - create entry in DB
    //7. remove pass and refresh token field from response
    //8. check fro user creation
    //9. return the RESPONSE

    const { fullName, userName, email, password } = req.body;
    console.log("Email,UserName", email, userName);

    if ([fullName, email, userName, password].some(
        (field) => field?.trim() === "")
    ) {
        throw new ApiError(400,"All fields are required");
    }

    const existedUser = await User.findOne({
        $or: [{userName},{email}]
    });

    if (existedUser) {
        throw new ApiError(409,"user with userName or email is already exists");
    }
    console.log(req.files);
    console.log(req.body);
    
    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if (!avatarLocalPath) {
        throw new ApiError(400,"AvatarLocalPath file is missing file must be required");
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);
    if (!avatar) {
        throw new ApiError(400,"Avatar file is required");
    }

    const user = await User.create({
        fullName,
        email,
        userName: userName.toLowerCase(),
        avatar: avatar.url, // in this we are saving avatar Image url 
        coverImage: coverImage?.url || "",
    })

    const createUser = await User.findById(user._id).select("-password -refreshToken");
    if (!createUser) {
        throw new ApiError(500,"Something went wrong while register the user creating");
    }

    return res.status(201).json(
        new ApiResponse(200,createUser,"User is registerd sucessfully")
    )
});

export {
    registerUser,
}