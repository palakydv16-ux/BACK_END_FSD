const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

const products = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: (100 + i * 10),
    category: i % 2 === 0 ? "Electronics" : "Clothing",
    inStock: i % 3 !== 0
}));

// Home route
app.get("/", (req, res) => {
    res.send("Product REST API is running");
});

// Get all products
app.get("/products", (req, res) => {
    res.json(products);
});

// Get product by ID
app.get("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.json(product);
});

// Add a new product
app.post("/products", (req, res) => {
    const { name, price, category, inStock } = req.body;

    const newProduct = {
        id: products.length + 1,
        name,
        price,
        category,
        inStock
    };

    products.push(newProduct);

    res.status(201).json(newProduct);
});

// Update a product
app.put("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    product.name = req.body.name || product.name;
    product.price = req.body.price || product.price;
    product.category = req.body.category || product.category;
    product.inStock = req.body.inStock ?? product.inStock;

    res.json(product);
});

// Delete a product
app.delete("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    const deletedProduct = products.splice(index, 1);

    res.json({
        message: "Product deleted successfully",
        product: deletedProduct[0]
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});