const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    sku: {
        type: String,
        required: [true, 'Sku is required'],
        unique: [true, 'Sku should be unique'],
        trim: true
    },
    productName: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true
    },
    productDesc: {
        type: String,
    },
    productSpecification: {
        type: String,
    },
    productIngredient: {
        type: String,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    variants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductVariant" 
    }],
    seller: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    customerPurchased: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Products", productSchema);
