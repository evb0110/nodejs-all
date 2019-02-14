const path = require('path');

const express = require('express');
const app = express();

app.use(express.static('public'));

app.all('/', (req, res) => {
  // res.send(`<h1>This is the home page</h1>`);
  res.sendFile(path.join(__dirname + '/node.html'));
});
app.all('*', (req, res) => {
  res.send('<p>Sorry, wrong page <b>404</b></p>')
})

app.listen(3000);
console.log('the server is ok');