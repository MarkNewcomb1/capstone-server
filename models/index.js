var mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("debug", true);
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
mongoose.Promise = Promise;

module.exports.Order = require("./order");
