const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    mobileNumber: {
        type: Number,
        required: [true, 'Mobile number is required'],
        unique: [true, 'Mobile number should be unique'],
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: [true, 'email should be unique'],
    },
    password: {
        type: String,
        required: [true, 'email is required'],
        trim: true,

    },
    addressDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address"
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products"
    }],
    cartItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserCart"
    }],
    role: {
        type: String,
        enum: ['user', 'seller', 'admin'],
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'verified', 'approved'],
        default: 'pending'
    },
    token: {
        type: String
    },

    resetPasswordExpires: {
        type: Date
    },
    image: {
        type: String
    },
    brandImage: {
        type: String
    }

})

module.exports = mongoose.model("User", userSchema);