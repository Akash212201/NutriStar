const express = require('express')
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('./config/DB.js')
const userRouter  = require('./routers/user.route')
const productRouter = require('./routers/product.route')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cookieParser())


app.get('/',(req,resp) => {
    resp.send("Hello")
})

app.use('/api/v1/user',userRouter) 
app.use('/api/v1/seller/products',productRouter)

app.listen(8080, () =>{
    console.log("Server started at port 8080")
})