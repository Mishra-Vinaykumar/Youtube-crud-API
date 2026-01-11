import mongoose from 'mongoose';
import express from "express";
import { DB_NAME } from "../constant.js";

const app = express();
const connDB = async()=>{
    try {
        const connctionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connection !! DBHOST ${connctionInstance}`);
        
    } catch (error) {
        console.log("MongoDB Connction failes error",error);
        process.exit(1);        
    }
}


export default connDB;


// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (err) => {
//             console.log("connection Failes ", err);
//             throw err
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`App is listing on port ${process.env.PORT}`);

//         }) 
//     } catch (error) {
//         console.log("error in DB : ", error);
//         throw error
//     }
// })();
