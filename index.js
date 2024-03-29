const express = require("express")
const mongoose = require("mongoose");
const productRoute = require("./Routes/product.routes")
 require('dotenv').config()
const {MONGOURL} = process.env

const app = express();
const port = 5900;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// Routes
app.use("/api/products", productRoute)

app.get("/", (req, res) => {
    res.send("<h2>Welcome to the CRUD Application with NodeJS, express and MongoDB</h2>")
})

mongoose.connect(MONGOURL)
    .then(() => {
        console.log("Database connected")
        app.listen(5900, () => {
            console.log(`listening on port ${port}`);
        })
    })
    .catch(() => {
        console.log("Databdase disconnected")
    })