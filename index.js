// Require and Init Express and Dotenv
require("dotenv").config()
const express = require("express")
const app = express()
const methodOverride = require("method-override")

// React / Express Settings
app.set("views", __dirname + "/views")
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))


// Controllers

    // Places
    app.use("/places", require("./controllers/places"))

    // Home
    app.get("/", (req, res) => {
        res.render("home")
    })

    // 404
    app.get("*", (req, res) => {
        res.render("error404")
    })

// Listen
app.listen(process.env.PORT)