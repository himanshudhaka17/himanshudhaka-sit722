import http from 'node:http';

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/healthz') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({status: 'ok'}));
    return;
  }
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from SIT722 10.2D');
});

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
