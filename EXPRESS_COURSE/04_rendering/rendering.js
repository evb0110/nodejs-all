const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req,res, next) => {
  res.send('Sanity check!')
});

app.listen(3000);