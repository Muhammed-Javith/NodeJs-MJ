const http = require('http');
function reqListener(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello World\n');
    res.end();
   // console.log('hello world');
}
const server = http.createServer(reqListener);
server.listen(8080);
``