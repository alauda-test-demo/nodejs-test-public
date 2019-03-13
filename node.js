const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`[${req.method}] ${req.url}`);
  res.write('hello nodejs');
  res.end();
});
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(8000, e => {
  if (!e) {
    console.log('server started at 8000');
  }
});
