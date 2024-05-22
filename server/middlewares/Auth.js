const User = require("../models/User");
const jwt = require("jsonwebtoken");
const asyncHandler = require('../utils/asyncHandler.js')
const ApiError = require('../utils/ApiError.js')
const ApiResponse = require('../utils/ApiResponse.js')
require('dotenv').config()

// auth
exports.auth = asyncHandler(async (req, resp) => {

    const token = req.body.token || req.header("Authorization").replace("Bearer ", "");
    if (token === "null")
        throw new ApiError(402, "Customer is not logged in ! Please Login")
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    if (!decode)
        throw new ApiError(402, "token is invalid")
})
// isCustomer
exports.isCustomer = asyncHandler(async (req, resp) => {
    const userDetails = await User.findOne({ email: req.user.email })
    if (!userDetails)
        throw new ApiError(402, "User role is not verified, Please try again")
    if (userDetails.accountType !== "Customer")
        throw new ApiError(400, "this is the protected route of Customer")

})
// isSeller
exports.isSeller = asyncHandler(async (req, resp) => {
    const userDetails = await User.findOne({ email: req.user.email })
    if (!userDetails)
        throw new ApiError(402, "User role is not verified, Please try again")
    if (userDetails.accountType !== "Customer")
        throw new ApiError(400, "this is the protected route of Seller")

})

// isAdmin
exports.isAdmin = asyncHandler(async (req, resp) => {
    const userDetails = await User.findOne({ email: req.user.email })
    if (!userDetails)
        throw new ApiError(402, "User role is not verified, Please try again")
    if (userDetails.accountType !== "Admin")
        throw new ApiError(400, "this is the protected route of Admin")
})

