const express = require('express')
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('./config/DB.js')
const userRouter  = require('./routers/user.route')
const productRouter = require('./routers/product.route')

app.use(cors({
    origin: '*',
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cookieParser())


app.get('/',(req,resp) => {
    resp.send("Hello")
})

app.use('/user/api/v1',userRouter) 
app.use('/seller/products/api/v1',productRouter)
app.listen(8080, () =>{
    console.log("Server started at port 8080")
})