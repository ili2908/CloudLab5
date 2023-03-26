const http = require('http');

const PORT = 80;

http.createServer((_, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Ok');
}).listen(PORT, () => {

    
  console.log(`app listening on port ${PORT}`);
});
