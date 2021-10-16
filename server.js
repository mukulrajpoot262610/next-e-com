const express = require('express')
const app = express()
const connectDB = require('./config/db')

connectDB()
const PORT = 8000;

app.listen(PORT, () => {
    console.log('Server is running on PORT: ' + PORT)
})