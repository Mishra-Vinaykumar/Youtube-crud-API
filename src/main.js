import dotenv from "dotenv";
import connDB from "./db/conn.js";
import { app } from "./app.js"

dotenv.config({
    path: './env'
})

connDB()
.then(() => {
    app.listen(process.env.PORT || 8000, ()=>{
    console.log(`SERVER IS RUNNIG AT PORT : ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MongoDB connection fails !!",err);
})

// require('dotenv').config({path:'./env'})
