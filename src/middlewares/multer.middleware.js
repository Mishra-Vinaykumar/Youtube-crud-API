import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Path to where storage file in local Storage
        cb(null, "./public/temp");
    },
    filename: function (req, file, cb) {
        // Ensure unique filenames by prefixing with timestamp
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
        console.log(`File uploaded: -> ${uniqueName}`);
    }
});

// Export upload middleware
export const upload = multer({
    storage
})