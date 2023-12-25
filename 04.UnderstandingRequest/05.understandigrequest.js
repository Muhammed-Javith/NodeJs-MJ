const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>MJ TECH CODE</title></head>')
    res.write('<body>')
    res.write('<h1>MJ TECH CODE</h1>')
    res.write('<h2 style="color: red;" >MJ TECH CODE</h2>')
    res.write('</body>')
    res.write('</html>')
    res.end();
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});