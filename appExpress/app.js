var express = require('express')
var app = express()
 app.set("view engine","ejs")
app.get('/', function (req, res) {
  res.sendFile(__dirname+'/index.html')
})
app.get('/about', function (req, res) {
    res.sendFile(__dirname+'/about.html')
  })
  app.get('/contact', function (req, res) {
    res.sendFile(__dirname+'/contact.html')
  })

  students=[
    {
      "name":"ahmad",
      "age":25
    },
    {
      "name":"Mhmd",
      "age":22
    },
    {
      "name":"fesal",
      "age":44
    }
  ]
  app.get('/students',  (req, res)=> {
    res.render('students',{students:students});
    // res.render('students',{name:"ahmad"},{rrr:"fdddf"});
  })
  app.get('/test',  (req, res)=> {
    res.render('test',{students:students});
    // res.render('students',{name:"ahmad"},{rrr:"fdddf"});
  })
 
app.listen(3000,function(req,res){
    console.log("server is running");
});
