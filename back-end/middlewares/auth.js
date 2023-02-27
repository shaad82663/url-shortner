//To check authenticity of the user e.g. if user trying to add event he/she must logged in first.
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");

//Check if user is authorised or not.
exports.isAuthenticatedUser = catchAsyncErrors( async (req, res, next) => {
    const { token } = req.cookies; 
    
    if(!token) {
        return next(new ErrorHandler("Login first to access resourses.", 401));
    }
 
     //Verifying token using jsonwebtoken (jwt)
     const decoded = jwt.verify(token, process.env.JWT_SECRET);

     //Assigning id to the user.
     req.user = await User.findById(decoded.id);
     
     next();//
})