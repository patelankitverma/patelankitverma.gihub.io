var http=require('http')
var url=require('url')
var server=http.createServer(function(req,res){
var page=url.parse(req.url).pathname

res.writeHead(200,{"contentType":"text/html"})
res.end("Hello Server")
})
server.on('close',function(){
	console.log("server closed");
});
server.listen(8081)
server.close();



