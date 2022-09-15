const host = 'localhost';
const port = 3000;
const http = require('http');

let reqlisten = function(req, res){
    res.setHeader('Content-Type', 'text/plain');
    switch (req.url){
        case "/first-name":
            res.writeHead(200);
            res.end("Jackson");
            break;
        case "/last-name":
            res.writeHead(200);
            res.end("Idongesit");
            break;
        case "/full-name":
            res.writeHead(200);
            res.end("Jackson Idongesit")
            break;
        default:
            res.writeHead(404);
            res.end("MY CHILDHOOD BEST FRIEND. Type '/full-name' for full name");


    }
    
};

let server = http.createServer(reqlisten);
server.listen(port, host, () => {
   console.log(`Running server on http://${host}:${port}`);
});
