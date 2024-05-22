const User = require('../models/User.js')
const Address = require('../models/Address.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const asyncHandler = require('../utils/asyncHandler.js')
const ApiError = require('../utils/ApiError.js')
const ApiResponse = require('../utils/ApiResponse.js')

exports.registerUser = asyncHandler(async (req, resp) => {
    const { mobileNumber, email, password } = req.body
    if (!mobileNumber || !email || !password)
        throw new ApiError(400, "required details are missing")


    const existedUser = await User.findOne({ $or: [{ mobileNumber }, { email }] })
    if (existedUser) {
        throw new ApiError(409, "Mobile Number or Email is already registered")
    }
    const addressdetails = await Address.create({
        address: null,
        city: null,
        mobileNumber: mobileNumber,
        state: null,
        country: null,
        pinCode: null
    });
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
        mobileNumber,
        email,
        password: hashedPassword,
        addressDetails: addressdetails._id,

    })
    await newUser.save();
    newUser.password = undefined
    return resp.status(201).json(
        new ApiResponse(200, newUser, "User registered successfully")
    )
})


exports.loginUser = asyncHandler(async (req, resp) => {

    const { mobileNumber, password } = req.body;
    if (!mobileNumber || !password)
        throw new ApiError(400, "Required details are missing")

    const user = await User.findOne({ mobileNumber }).populate("addressDetails");
    if (!user)
        throw new ApiError(404, "User not found")

    const validUser = await bcrypt.compare(password, user.password);
    if (!validUser)
        throw new ApiError(401, "Password is incorrect")

    const payload = {
        mobileNumber: user.mobileNumber,
        id: user._id,
        accountType: user.accountType
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "24h"
    });
    user.token = token
    await user.save()
    user.password = undefined
    const options = {
        expires: new Date(Date.now() + 3 * 60 * 60 * 1000),
        httpsOnly: true,
        secure: true
    }
    const UserData = {
        user: user,
        token
    }
    return resp.status(201).cookie("token", token, options).json(
        new ApiResponse(200, UserData, "user login successfull"))

})
const logoutUser = asyncHandler(async (req, resp) => {

})
