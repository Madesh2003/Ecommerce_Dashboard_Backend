const mongoose = require("mongoose");
require('dotenv').config();

async function dbconnect() {
    await mongoose.connect(`${process.env.DATABASE_URI}${process.env.DATABASE_NAME}`)
        .then(() => console.log("Database connected successfully"))
        .catch((err) => console.error("Database connection error:", err))
}

module.exports = { dbconnect };
