const { create_user, signin } = require("../Routers/AuthRouter");

const AuthRouter = require("express").Router();

AuthRouter.post("/create",create_user);
AuthRouter.post("/signin",signin);

module.exports= AuthRouter;