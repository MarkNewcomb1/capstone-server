const express = require("express"),
  app = express(),
  port = parseInt(process.env.PORT || 8000),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  // Order = require("./models/order"),
  orderRoutes = require("./routes/orders");

const Order = require('./models/order');  
var mongodb = require("mongodb");


mongodb.MongoClient.connect(process.env.DATABASE_URL, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }});

//   // Save database object from the callback for reuse.
//   db = database;
//   console.log("Database connection ready");

//   // Initialize the app.
//   var server = app.listen(process.env.PORT || 8080, function () {
//     var port = server.address().port;
//     console.log("App now running on port", port);
//   });


app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/orders", orderRoutes);

app.get('/seed', (req, res)=> {
  Order.create([{
    body: 'strat',
    hand: 'left',
    paint: 'white',
    pickguard: 'black',
  },
  {
    body: 'les-paul',
    hand: 'right',
    paint: 'black',
    pickguard: 'white',
  }
])
  // newOrder.save()
  .then((saved) => {
    res.json(saved);
  })
})


app.listen(port, function() {
  console.log("APP IS RUNNING ON PORT ", port);
});
