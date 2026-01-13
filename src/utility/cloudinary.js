import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDNAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        // Upload file to Cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto", // auto-detect file type
        });

        console.log("File uploaded successfully:", response.secure_url);

        // Remove file from local temp storage
        fs.unlinkSync(localFilePath);

        return response;
    } catch (error) {
        // Cleanup temp file if upload fails
        if (localFilePath && fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }

        console.error("Cloudinary upload failed:", error);
        return null;
    }
};

export { uploadOnCloudinary };
