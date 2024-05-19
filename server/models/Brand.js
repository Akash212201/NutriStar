const mongoose = require('mongoose')
const brandSchema = new mongoose.Schema({
    brandName: {
        type: String,
        required: [true, 'Brand name is required'],
        unique: [true, 'Brand name should be unique'],
    },
    brandImage: {
        type: String,
        required: [true, 'Brand image is required']
    },
    brandDesc: {
        type: String
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Products"
    }],
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Category"
    }],
    Origin: {
        type: String
    }
})
module.exports = mongoose.model("Brand", brandSchema);