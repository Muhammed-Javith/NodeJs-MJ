const http = require('http');
const routes = require('./route')

console.log(routes.someText);
console.log('Developing completed');

const server = http.createServer(routes.handler);
server.listen(3000);