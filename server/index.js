
const express = require("express");
const cors = require("cors");
const path = require("path");
const PORT = 3000;

const app = express();
app.use(cors())
app.use(express.static(path.join(__dirname, 'img')));

const products = [
    { id: 1, name: "apple", img: "/apple.jpg" },
    { id: 2, name: "pear", img: "/pear.jpg" },
    { id: 3, name: "orange", img: "/orange.jpg" },
    { id: 4, name: "zero coke", img: "/zero_coke.jpg" },
]

app.get("/", (req, res) => {
    res.send("ok!")
})

app.get("/products", (req, res) => {
    res.json(products)
})

app.get("/products/:id", (req, res) => {

    const { id } = req.params
    const product = products.find(product => product.id == id)

    if (product){
        res.json(product)
    }
    else {
        res.status(404).json("Not Found")
    }

})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})