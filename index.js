const express = require("express"),
  app = express(),
  port = parseInt(process.env.PORT || 8000),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  // Order = require("./models/order"),
  orderRoutes = require("./routes/orders");

const Order = require('./models/order');  
  
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
