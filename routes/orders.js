var express = require("express");
var router = express.Router();
var db = require("../models");
var helpers = require("../helpers/orders");

router
  .route("/")
  .post(helpers.createOrder)
  
router
  .route("/:orderId")
  .get(helpers.getOrder)


module.exports = router;
