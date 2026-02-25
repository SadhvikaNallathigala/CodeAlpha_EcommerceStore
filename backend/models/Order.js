const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  items: [
    {
      productId: String,
      name: String,
      quantity: Number,
      price: Number
    }
  ],
  totalAmount: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Order", orderSchema);