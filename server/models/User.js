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
        required: [true, 'password is required'],
        trim: true,

    },
    addressDetails: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
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
    token: {
        type: String
    },

    resetPasswordExpires: {
        type: Date
    },
    image: {
        type: String
    }

})

module.exports = mongoose.model("User", userSchema);