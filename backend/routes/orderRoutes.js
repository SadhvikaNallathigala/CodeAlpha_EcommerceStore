const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

router.post("/", async (req, res) => {
  try {
    const { user, items, totalAmount } = req.body;

    const order = await Order.create({
      user,
      items,
      totalAmount
    });

    res.json(order);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

router.get("/", async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

module.exports = router;