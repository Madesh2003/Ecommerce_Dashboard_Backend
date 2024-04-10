const mongoose = require("mongoose");
require('dotenv').config();

async function dbconnect() {
    try{
        await mongoose.connect(`${process.env.DATABASE_URI}${process.env.DATABASE_NAME}`)
        console.log("database connected successfully")
    }catch(err){
        console.log(err)
    }
}

module.exports = { dbconnect };