const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  body: String,
  hand: String,
  paint: String,
  pickguard: String,
  date: {
    type: Date,
    default: Date.now
  }
});
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
