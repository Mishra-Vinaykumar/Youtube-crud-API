import { Schema, model } from "mongoose";

const VideoSchema = new Schema({
    videoFile: {
        type: String,  //upload from cloudnairy service
        required: [true, "Video file is required"],
    },
    thumbnail: {
        type: String,
        required: [true, "Thumbnail is required"],
    },
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true
    },
    duration: {
        type: Number,
        required: [true, "Duration is required"],
        // Video duration in seconds (extracted after upload)
    },
    desc: {
        type: String,
        required: [true, "Description is required"],
        trim: true
    },
    views: {
        type: Number,
        default: 0
    },
    isPublished: {
        type: Boolean,
        default: false // Video visibility status (public/private)
    },
    owner: {
        type: Schema.Types.ObjectId, // Reference to the user who uploaded the video
        ref: "User",
        index: true
    }
},
    { timestamps: true }
);

export const Video = model("video", VideoSchema);

/*

| Field       | Cloudinary Usage                               |
| ----------- | ---------------------------------------------- |
| `videoFile` | Stores **Cloudinary video URL**                |
| `thumbnail` | Stores **Cloudinary image URL**                |
| `duration`  | Usually derived from Cloudinary video metadata |

*/