var http=require('http')
var server=http.createServer(function(req,res){
res.writeHead(200,{"contentType":"text/html"})

res.write(

	"<!DOCTYPE html>"+
	"<html>"+
	"<head>"+
	"<title>"+
	"......"+
	"</title>"+
	"Registration form"+
	"</head>"+
	"<body>"+
	"<form>"+
	"Enter name:<input type='text'>"+
	"<br>"+
	"Enter password:<input type='password'>"+
	"<br>"+
	"<input type='button' value='login'>"+
	"</form>"+
	"</body>"+
	"</html>")
res.end("")
})
server.listen(8081)