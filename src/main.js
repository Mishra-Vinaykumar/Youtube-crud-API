import dotenv from "dotenv";
import connDB from "./db/conn.js"
dotenv.config({
    path:'./env'
})


connDB();

const profile = {
    userName : "Mishra-Vinay",
    age : 23,
    printDetails : function(){
        console.log(`My name is ${this.userName} , and age is ${this.age}`)
    }
}

profile.printDetails();

// require('dotenv').config({path:'./env'})
