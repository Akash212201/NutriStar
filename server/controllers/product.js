const Products = require('../models/Products.js')
exports.createProduct = async (req, resp) => {
    // const {
    //     sku,
    //     flavor,
    //     weight,
    //     mrp,
    //     price,
    //     productStock,
    //     images,
    //     ratingReviews
    // } = req.body;
    // if (!sku || !flavor || !weight || !mrp || !price || !productStock || !images || !ratingReviews) {
    //     resp.status(401).send("required details are missing");
    //     return;
    // }
    // const existSKU = Products.findOne({ sku });
    // if (existSKU) {
    //     resp.status(401).send("sku is already registered");
    //     return;
    // }
    resp.send("helloP");

}

exports.showproductInformation = async (req, resp) => {
    resp.send("Hello")
}
exports.showproductDetail = async (req, resp) => {
    resp.send("Hello")
}
exports.showAllproducts = async (req, resp) => {
    resp.send("Hello")
}
exports.editproduct = async (req, resp) => {
    resp.send("Hello")
}
exports.getSellerproducts = async (req, resp) => {
    resp.send("Hello")
}
exports.deleteproduct = async (req, resp) => {
    resp.send("Hello")
}
exports.reqproduct = async (req, resp) => {
    resp.send("Hello")
}