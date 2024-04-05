const AuthModel = require("../Models/AuthModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const saltRounds = 10;
const secret = "Madesh_admindashboard";



function create_user(req, res, next) {
  if (req.body.password) {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Something went wrong",
          error: err,
        });
      }
      const newUser = new AuthModel({ ...req.body, password: hash });
      newUser.save()
        .then((response) => {
          return res.status(200).json({
            success: true,
            message: "Account created successfully",
          });
        })
        .catch((error) => {
          return res.status(500).json({
            success: false,
            error: error,
          });
        });
    });
  }
}



async function signin(req, res, next) {
  const { email, password } = req.body;
  console.log(req.body);
  let query = {};

  if (email) {
    query = {
      email: email,
    };
  }

  try {
    const response = await AuthModel.findOne(query);
    if (!response) {
      return res.status(401).json({
        success: false,
        message: "Account does not exist",
      });
    }
    bcrypt.compare(password, response.password).then(function (result) {
      if (result) {
        const token = jwt.sign({ role: ["customer"] }, secret, {
          expiresIn: "1h",
        });
        res.status(200).json({
          success: true,
          message: "Account sign in successful",
          token: token,
        });
      } else {
        res.status(402).json({
          success: false,
          message: "Incorrect Password",
        });
      }
    });
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      success: false,
      error: error.message,
    });
   
  }
}


module.exports = {
  create_user,
  signin
};
