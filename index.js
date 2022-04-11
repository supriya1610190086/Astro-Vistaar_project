const express = require("express")
const app = express();
const PORT = 9000
const user = require('./Routes/user')
const Course = require('./Routes/Cources')

app.use(express.json())
require('dotenv').config()

app.use('/', user, Course)
app.listen(PORT, () => {
    console.log(`Server Running on port:http://localhost:${PORT}`)
})