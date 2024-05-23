const express = require("express")
const router = express.Router();

// const { login, signup, sendOtp, changepassword } = require("../controllers/Auth")

// const { resetPassword, resetPasswordToken } = require("../controllers/ResetPassword")
// const { getCategories, groupcategory, groupcategoryid, 
//     groupcategorysort, createCategory, getCategory, 
//     categoryPageDetails } = require("../controllers/category")
 const { auth, isCustomer, isAdmin,isSeller } = require("../middlewares/Auth")
// const { updateProfile, deleteProfile, getPurchasedProducts, updateDisplayPicture, 
//     getAllUserDetails, getorders, getallusers, instructorStats, piechartdashboard, 
//     linechartdashboard, barchartdashboard } = require("../controllers/profile");

// router.post("/sendotp", sendOtp);
// router.post("/changePassword", auth, changepassword)
// //route for getting all categories

// router.get("/getCategories", getCategories);
// router.get("/getCategory", getCategory);
// router.post("/createCategory", createCategory);
// router.get("/groupCategory", groupcategory)
// router.post("/groupcategoryid", groupcategoryid)
// router.post("/groupcategorysort", groupcategorysort)
// router.post("/categoryPageDetails", categoryPageDetails)


// // reset password
// router.post("/resetPasswordToken", resetPasswordToken);
// router.post('/resetPassword', resetPassword)

// //update profile
// router.post("/updateProfile", auth, updateProfile)
// router.get("/deleteProfile", auth, deleteProfile);
// router.get("/getUserDetails", auth, getAllUserDetails)
// router.post("/updateImage", auth, updateDisplayPicture)
// router.get("/allorders", getorders);
// router.get("/getallusers", getallusers);



// // for customers
// router.get("/allPurchasedProducts", auth, isCustomer, getPurchasedProducts);
// router.get("/instructorStats", auth, isAdmin, instructorStats);
// router.get("/piechartdashboard", auth, isAdmin, piechartdashboard);
// router.get("/linechartdashboard", auth, isAdmin, linechartdashboard);
// router.get("/barchartdashboard", auth, isAdmin, barchartdashboard);
const { loginUser, registerUser } = require("../controllers/user");
router.route("/signup").post(registerUser);
router.route("/login").post(loginUser);
module.exports = router;