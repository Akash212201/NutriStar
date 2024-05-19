const mongoose = require("mongoose");

const productVariantSchema = new mongoose.Schema({
    sku: {
        type: String,
        required: [true, 'Sku is required'],
        unique: [true, 'Sku should be unique'],
        trim: true
    },
    flavor: {
        type: String,
        required: [true, 'flavor is required'],
    },
    weight: {
        type: Number,
        required: [true, 'weight is required'],
    },
    mrp: {
        type: Number,
        required: [true, 'map is required'],
    },
    price: {
        type: Number,
        required: [true, 'price is required'],
    },
    productStock: {
        type: Number,
        default: 0,
    },
    images: [{
        type: String
    }],
    ratingReviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "RatingReviews"
    }]
});
module.exports = mongoose.model("ProductVariant", productVariantSchema);