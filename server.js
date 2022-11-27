const express = require('express');
const app = express();

const PORT = 3000;

const PRICES = [
  {
    id: 1,
    instrumentName: 'EUR/USD',
    bid: '1.1000',
    ask: '1.2000',
    timestamp: Date.now()
  },
  {
    id: 2,
    instrumentName: 'EUR/JPY',
    bid: '2.1000',
    ask: '2.2000',
    timestamp: Date.now()
  },
  {
    id: 3,
    instrumentName: 'GBP/USD',
    bid: '3.1000',
    ask: '3.2000',
    timestamp: Date.now()
  }
];


app.listen(PORT, () => {
   console.log('Server has been started');
});

app.get('/getAllPrices', function(req, res) {
  res.json(PRICES);
})

app.get('/getLatestPrice', function(req, res) {
  const element = PRICES.find(item => item.instrumentName === req.query['instrument']);
  res.json(Object.assign(element || {}, {
    bid: String((Math.floor(Math.random() * 10)).toFixed(4)),
    ask: String((Math.floor(Math.random() * 20)).toFixed(4)),
    timestamp: Date.now()
  }));
})
