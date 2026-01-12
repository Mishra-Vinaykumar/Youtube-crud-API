import { Schema, model } from "mongoose";

const userSchema = new Schema({
    userName: {
        type: String,
        required: [true, "userName is required"],
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, "Please provide a valid email"]
    },
    fullName: {
        type: String,
        required: [true, "FullName is required"],
        trim: true
    },
    avatar: {
        type: String,
        required: [true, "avatar is required"], // upload from Cloudinary service
    },
    coverImage: {
        type: String,
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password: {
        type: String,
        required: [true, "Password is required"], // upload from cloudnairy service
        select: false
    },
    refreshToken: {
        type: String,
    }
},
    { timestamps: true }
);

export const User = model("User", userSchema);