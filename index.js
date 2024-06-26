const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const env = require("dotenv");
const AuthMiddleware = require("./Middleware/Auth.middleware")
const { dbconnect }= require("./db.config");
const mongoose =  require("mongoose")

dbconnect();

const APP_SERVER = express();

APP_SERVER.use(bodyparser.json()); 

APP_SERVER.use(cors());

env.config();


APP_SERVER.use('/user',require('./Controllers/AuthenticationControllers'));

APP_SERVER.use('/product',require("./Controllers/ProductController"))

APP_SERVER.use('/api',require('./Controllers/ProductUpdatecontroller'))

APP_SERVER.use('/soldproducts',require('./Controllers/Soldproducts.Controller'))

APP_SERVER.use('/customers',require('./Controllers/Customer'));

APP_SERVER.use('/eventapi',require('./Controllers/EventsController'));

APP_SERVER.all("/", (req, res, next) => {
    res.status(200).json({
        message: "server is working"
    });
});

APP_SERVER.listen(process.env.PORT, () => console.log(`Server is running ${process.env.PORT}`));