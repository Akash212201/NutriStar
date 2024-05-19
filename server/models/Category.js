const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: [true, 'Category name is required']
    },
    subCategoryName: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Sub category name is required'],
        ref: "Sub Category"
    },

    products: [{
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'product is required'],
        ref: "Products"
    }]
})
module.exports = mongoose.model("Category", categorySchema);