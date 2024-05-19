const mongoose = require("mongoose");

const ratingReviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, 'User Details are required']
    },
    rating: {
        type: Number,
        required: [true, 'rating is required'],
    },
    review: {
        type: String,

    },
    products: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductVariant",
        required: [true, 'product is required']
    }

});

module.exports = mongoose.model("RatingReviews", ratingReviewSchema);