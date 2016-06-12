var express=require('express')
var app=express()
app.get('/login',function(req,res){
	var myData=["red","blue","green"]
res.render("login.ejs",{
		data:myData
		});
});
app.listen(808)
console.log("executed");
