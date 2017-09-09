const http = require('http');
const PORT1 = 7000;
const PORT2 = 7500;

function handleRequest(request, response) {
    response.end('You look great today!');
}

function handleRequest2(request, response) {
    response.end('You look horrible today!');
}

const server1 = http.createServer(handleRequest);

const server2 = http.createServer(handleRequest2);

server1.listen(PORT1, function() {
    console.log('Listening on localhost:' + PORT1);
});

server2.listen(PORT2, function() {
    console.log('Listening on localhost:' + PORT2);
});