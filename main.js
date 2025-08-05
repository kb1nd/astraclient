const fs = require('fs').promises;
const requestListener = function (req, res) {
  fs.readFile(__dirname + '/EaglercraftX_1.8_u53_Offline_Signed.html')
    .then((contents) => {
      res.setHeader('Content-Type', 'text/html');
      res.writeHead(200);
      res.end(contents);
    })
    .catch((err) => {
      res.writeHead(500);
      res.end(err);
      return;
    });
};
// Create a server object
const http = require('http');

const port = process.env.PORT || 10000;

const server = http.createServer(requestListener);
server.listen(port);
