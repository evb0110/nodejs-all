const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {'content-type': 'text/html'});
    const homePageHTML = fs.readFileSync('./node.html')
    res.write(homePageHTML);
    res.end();
  } else if (req.url === '/altitude-clouds-cold-417173.jpg') {
    res.writeHead(200, {'content-type': 'image/jpg'});
    const image = fs.readFileSync('./altitude-clouds-cold-417173.jpg')
    res.write(image);
    res.end();
  } else if (req.url === '/styles.css') {
    res.writeHead(200, {'content-type': 'text/css'});
    const css = fs.readFileSync('./styles.css')
    res.write(css);
    res.end();
  } else {
    res.writeHead(404, {'content-type': 'text/html'})
    res.write(`<h4>We haven't found your page!</h4>`);
    res.end();
  }
});

server.listen(3000);