const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Add product
router.post("/", async (req, res) => {
  const { name, price, description, image } = req.body;

  const product = await Product.create({
    name,
    price,
    description,
    image
  });

  res.json(product);
});

// Get all products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

module.exports = router;