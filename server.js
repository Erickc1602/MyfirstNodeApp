const http = require('http');

const hostname = "127.0.0.1"
const port = 2000

const server = http.createServer((request, response) =>{
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Hello World");

});

server.listen(port, hostname, ()  => {
    console.log (`Server running at https://${hostname}:${port}`)

})
