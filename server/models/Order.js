const mongoose = require("mongoose");

const orderItemsSchema = new mongoose.Schema({
    productSKU: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: [true, "required"]
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: [true, 'order name is required']
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderItems: [orderItemsSchema],
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address"
    },
    status: {
        type: String,
        enum: ["DELIVERED","PENDING","CANCELED"]
    }
})
module.exports = mongoose.model("Order", orderSchema);