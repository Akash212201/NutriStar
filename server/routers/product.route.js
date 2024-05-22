 const express = require("express")
 const router = express.Router();
const {loginUser} = require('../controllers/user')
// const { createproduct, showproductInformation,
//     showAllproducts, editproduct,
//     getSellerproducts, deleteproduct
// } = require("../controllers/product");
// const { auth, isCustomer, isSeller } = require("../middlewares/auth")
// const { RatingAndReviews, getAverageRating, getAllRatings } = require("../controllers/RatingAndReviews")

// router.get("/getAllproducts", showAllproducts);
// router.get("/getAllSellerproducts", auth, isSeller, getSellerproducts)

// router.post("/showproductdetails", auth, isCustomer, showproductInformation)
// router.post("/showproductDetails", showproductInformation)

// //seller
// router.post("/createproduct", auth, isSeller, createproduct);
// router.post("/editproduct", auth, isSeller, editproduct)
// router.post("/deleteProduct", auth, isSeller, deleteproduct)


// // rating and reviews
// router.get("/getAllRatings", getAllRatings);
// router.post("/ratingAndReviews", auth, isCustomer, RatingAndReviews)
// router.post("/getAverageRating", getAverageRating)

router.post('/login',loginUser)
 module.exports = router;