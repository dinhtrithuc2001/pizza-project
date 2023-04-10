const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/config')
require('colors');
const morgan = require('morgan');


// config dotenv
dotenv.config()

//connection mongoDB
connectDB();

const app = express()

// middlewares 
app.use(express.json())
app.use(morgan('dev'))

// route
app.use('/api/pizzas', require("./routes/pizzaRoute"));
app.use('/api/users', require("./routes/userRoute"));
app.use('/api/orders', require("./routes/orderRoute"));
app.get('/', (req, res) => {
    res.send('<h1>Hello From Node Server via Node mon</h1>')
})


// listening
const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Server running on ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`)
}) 