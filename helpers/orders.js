var db = require("../models");

exports.getOrder = function(req, res) {
  db.Order.findById(req.params.orderId)
    .then(function(foundOrder) {
      res.json(foundOrder);
    })
    .catch(function(err) {
      res.send(err);
    });
};
exports.createOrder = function(req, res) {
  db.Order.create(req.body)
    .then(function(saved) {
      res.status(201).json(saved);
    })
    .catch(function(err) {
      res.send(err);
    });
};
module.exports = exports;
