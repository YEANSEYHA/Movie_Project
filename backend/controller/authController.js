import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import ErrorResponse from "../utils/errorResponse.js";

// @desc    register user
// @route   POST /api/auth/register
// @access  Public

const register = asyncHandler(async (req, res, next) => {
  const { name, email, password, isAdmin } = req.body;

  console.log(req.name);
  const createdUser = await User.create({
    name,
    email,
    password,
    isAdmin,
  });
  sendTokenResponse(user, 200, res);
  if (createdUser) {
    res.status(201).json({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      password: createdUser.password,
      isAdmin: createdUser.isAdmin,
      token: token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    login user
// @route   POST /api/auth/login
// @access  Public

const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate email @ password
  if (!email || !password) {
    return next(new ErrorResponse("PLease provide an email and password", 400));
  }
  // Check for user
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }
  // check if password matched
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  sendTokenResponse(user, 200, res);
});

// Get token from model, create cooking and send response
const sendTokenResponse = (user, statusCode, res) => {
  // create token
  const token = user.getSignedJwtToken();
  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") {
    options.secure = true;
  }
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
  });
};
export { register, login };
