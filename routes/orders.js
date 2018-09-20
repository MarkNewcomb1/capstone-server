var express = require("express");
var router = express.Router();
var db = require("../models");
var helpers = require("../helpers/orders");

router
  .route("/:orderId")
  .get(helpers.getOrder)

router.post('/', (req, res) => {
  
})

module.exports = router;
