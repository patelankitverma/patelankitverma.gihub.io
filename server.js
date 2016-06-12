var http=require('http')
var server=http.createServer(function(req,res){
res.writeHead(200,{"contentType":"text/html"})
var name="ankit";
var dept="MCA";
var year=2016;

res.write("name of student="+name+ "\n dept name="+dept+ "\n year="+year)
res.end("")
})
server.listen(8081)