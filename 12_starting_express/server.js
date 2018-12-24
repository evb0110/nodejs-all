const express = require('express');

let app = express();

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>');
  res.send({
    name: 'Bill',
    likes: [
      'Biking',
      'Cities',
    ]
  });
});

app.get('/about', (req, res) => {
  res.send('About Page')
});

app.get('/bad', (req, res) => {
  res.send({
    error: 'Unable to handle the request',
  })
})

app.listen(3000);