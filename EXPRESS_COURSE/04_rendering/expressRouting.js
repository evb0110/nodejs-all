const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log(req);
  res.send('<h1>Hi GET!</h1>');
});

app.post('/', (req, res) => {
  console.log(req);
  res.send('<h1>Hi POST!</h1>');
});

app.link('/', (req, res) => {
  console.log(req);
  res.send('<h1>Hi LINK!</h1>');
});

app.listen(port);
console.log('server is up');
