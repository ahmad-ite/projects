
var express = require("express");
var app	= express();
app.use('/bootstrap',  express.static(__dirname + '/bootstrap'));


app.get('/',function(req,res){
      res.sendFile(__dirname + "/home.html");
});

app.get('/home',function(req,res){
      res.sendFile(__dirname + "/home.html");
});

app.get('/about',function(req,res){
      res.sendFile(__dirname + "/about.html");
});

app.get('/contact',function(req,res){
      res.sendFile(__dirname + "/contact.html");
});

app.listen(3000,function(){
  console.log("Working On Port 3000");
});