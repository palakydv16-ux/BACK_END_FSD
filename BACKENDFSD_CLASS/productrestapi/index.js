const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

const PORT = 3000;

// Read products from JSON file
function getProducts() {
    const data = fs.readFileSync("product.json", "utf-8");
    return JSON.parse(data);
}

// Write products to JSON file
function saveProducts(products) {
    fs.writeFileSync(
        "product.json",
        JSON.stringify(products, null, 2)
    );
}

// Home route
app.get("/", (req, res) => {
    res.send("Product REST API is running...");
});


// ================= GET ALL PRODUCTS =================

app.get("/products", (req, res) => {
    const products = getProducts();

    res.json(products);
});


// ================= GET PRODUCT BY ID =================

app.get("/products/:id", (req, res) => {

    const products = getProducts();

    const id = parseInt(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.json(product);
});


// ================= POST - ADD PRODUCT =================

app.post("/products", (req, res) => {

    const products = getProducts();

    const newProduct = {
        id: products.length > 0
            ? Math.max(...products.map(p => p.id)) + 1
            : 1,
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        brand: req.body.brand,
        stock: req.body.stock
    };

    products.push(newProduct);

    saveProducts(products);

    res.status(201).json({
        message: "Product added successfully",
        product: newProduct
    });
});


// ================= PUT - UPDATE PRODUCT =================

app.put("/products/:id", (req, res) => {

    const products = getProducts();

    const id = parseInt(req.params.id);

    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    products[index] = {
        id: id,
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        brand: req.body.brand,
        stock: req.body.stock
    };

    saveProducts(products);

    res.json({
        message: "Product updated successfully",
        product: products[index]
    });
});


// ================= PATCH - PARTIAL UPDATE =================

app.patch("/products/:id", (req, res) => {

    const products = getProducts();

    const id = parseInt(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    Object.assign(product, req.body);

    saveProducts(products);

    res.json({
        message: "Product partially updated",
        product: product
    });
});


// ================= DELETE PRODUCT =================

app.delete("/products/:id", (req, res) => {

    const products = getProducts();

    const id = parseInt(req.params.id);

    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    const deletedProduct = products.splice(index, 1)[0];

    saveProducts(products);

    res.json({
        message: "Product deleted successfully",
        product: deletedProduct
    });
});


// ================= START SERVER =================

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});



app.get('/about', (req, res) => {
    res.send('This is a product REST API built with Express.js');
});