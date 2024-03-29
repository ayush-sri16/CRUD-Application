const express = require("express")
const mongoose = require("mongoose");
const productRoute = require("./Routes/product.routes")

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

mongoose.connect("mongodb+srv://ayushacp2051:5N5iQaFN1l0dcNHT@crudapp.yzqhs02.mongodb.net/Node-API?retryWrites=true&w=majority&appName=crudApp")
    .then(() => {
        console.log("Database connected")
        app.listen(5900, () => {
            console.log(`listening on port ${port}`);
        })
    })
    .catch(() => {
        console.log("Databdase disconnected")
    })