const express = require('express');
const router = express.Router();
const { auth, isAdmin, createCategory } = require('../controllers/category.js')

router.post('/addcategory', auth, isAdmin, createCategory)

module.exports = router;