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
  
  db.Order.create(prettifyValues(req.body))
    .then(function(saved) {
      console.log("SAVED", saved);
      
      res.status(201).json(saved);
    })
    .catch(function(err) {
      res.send(err);
    });
};

function prettifyValues(guitar) {
  for (var key in guitar) {
    switch(key) {
      case 'body':
        guitar.body = prettifyBody(guitar.body);
        break;
      case 'hand':
        guitar.hand = prettifyHand(guitar.hand);
        break;
      case 'paint':
        guitar.paint = prettifyPaint(guitar.paint);
        break;
    }
  }
  return guitar;
}

function prettifyBody(body) {
  return body === 'strat' ? 'Fender Stratocaster' : "Gibson Les Paul";
}

function prettifyHand(hand) {
  return hand === 'left' ? 'Left-Handed' : 'Right-Handed';
}

function prettifyPaint(paint) {
  switch(paint) {
    case 'maroon':
      return 'Maroon';
      break;
    case '#ADCEBE':
      return 'Surf Green';
      break; 
    case '#fffff6':
      return 'White';
      break;   
    case 'purple':
      return 'Purple';
      break;  
    case 'black':
      return 'Black';
      break;
    case 'url(#metallic-teal)':
      return 'Metallic Teal';
      break;
    case 'url(#metallic-blue)':
      return 'Metallic Blue';
      break;
    case 'url(#metallic-burnt-orange)':
      return 'Metallic Burnt Orange';
      break;
    case 'url(#metallic-gold)':
      return 'Metallic Gold';
      break;
    case 'url(#metallic-gray)':
      return 'Metallic Gray';
      break;
    case 'url(#metallic-purple)':
      return 'Metallic Purple';
      break;
    case 'url(#clear)':
      return 'Clear';
      break;
  }
}
module.exports = exports;
