const host = 'localhost';
const port = 3000;
const http = require('http');

let reqlisten = function(req, res){
    res.writeHead('Content-Type', 'text/plain');
    res.writeHead(200);
    res.end('Jackson Idongesit');
};

let server = http.createServer(reqlisten);
server.listen(port, host, () => {
    console.log(`Runnin server on http://${host}:${port}`);
});
