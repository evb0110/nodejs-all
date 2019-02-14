const express = require('express');
const app = express();
const port = 3000;

function validateUser(req, res, next) {
  res.locals.validated = true;
  console.log("Validate ran!");
  next();
}

app.use('/admin', validateUser);

app.get('/', (req, res, next) => {
  res.send('<h1>Main Page</h1>')
});
app.get('/admin', (req, res, next) => {
  res.send('<h1>Admin Page</h1>')
});
app.listen(port);
