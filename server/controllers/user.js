const User = require('../models/User.js')
const bcrypt = require('bcrypt')
const asyncHandler = require('../utils/asyncHandler.js')


const register = asyncHandler(async (req, resp) => {
    resp.status(200).json({
        message: "ok"
    })
})

const SignUpView = async (req, resp) => {
    const { firstName, lastName, mobileNumber,
        email, password, addressDetails, token,
        resetPasswordExpires,
        image } = req.body
    if (!mobileNumber || !email || !password) {
        return resp.status(200).json({
            success: false,
            message: "required details are missing"
        })
    }
    const existMobileNumber = await User.findOne({ mobileNumber })
    if (!existMobileNumber) {
        return resp.status(201).json({
            success: false,
            message: "mobile number is already register"
        })
    }
    const existEmail = await User.findOne({ email })
    if (!existEmail) {
        return resp.status(201).json({
            success: false,
            message: "email is already register"
        })
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    if (!hashedPassword) {
        return resp.status(201).json({
            success: false,
            message: "Couldn't hashed password"
        })
    }
    const newUser = await User.create({
        firstName, lastName, mobileNumber,
        email, password: hashedPassword, addressDetails, token,
        resetPasswordExpires,
        image
    }).populate()
    exce()

}
loginView = async(req,resp)=>{
resp.send("login")
}
module.exports = {
    loginView,
    SignUpView
}