require('dotenv').config()
require("../db/connection")
const express = require("express")
const path = require("path")
const app = express()
app.use(express.json())

const userRoutes = require("../routes/user.routes")
const bookRoutes = require("../routes/book.routes")

const statisFiles = path.join("../uploads")
app.use(express.static(statisFiles))

app.use("/user", userRoutes)
app.use("/book", bookRoutes)

app.get('*', (req, res) => res.status(404).send({
       apiStatus: false,
       message: "incorrect route"
     }))


module.exports = app