import dotenv from "dotenv";
dotenv.config({
    path:'./env'
})

import connDB from "./db/conn.js"

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
