var http = require ('http');
var fs = require ('fs');
var url = require ('url')

http.createServer(function(request,responce){
    var pathname = url.parse(request.url).pathname;

    console.log("request for"+pathname+"received");

    fs.readFile(pathname.substr(1),function(err, data){
        if (err){
            console.log(err);
            responce.writeHead(404,{'content-type':'text/html'})
        }else{
            responce.writeHead(200,{'content-type':'text/html'});
            responce.write(data.toString())
        }
        responce.end();
    })
}).listen(27017);

console.log('Server running at http://localhost:27017/');