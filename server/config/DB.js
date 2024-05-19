const mongoose = require('mongoose')
require('dotenv').config()
const connection = async() => {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("Database is connected")
    } catch (error) {
        console.log(error)
    }
}

connection()