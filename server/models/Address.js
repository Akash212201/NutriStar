const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    address: {
        type: String,
    },
    city: {
        type: String
    },
    pinCode: {
        type: Number,
        trim: true
    },
    mobile: {
        type: Number,
        required: [true, 'Mobile number is required'],
        trim: true
    },
    state: {
        type: String,
        trim: true
    },
    country: {
        type: String,
    },
});

module.exports = mongoose.model("Address", addressSchema);