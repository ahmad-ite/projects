var http = require("http");
var express = require('express');
var app = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');

//start mysql connection
var connection = mysql.createConnection({
  host     : 'localhost', //mysql database host name
  user     : 'root', //mysql database user name
  password : '', //mysql database password
  database : 'test' //mysql database name
});

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected with mysql database...')
})
//end mysql connection

//start body-parser configuration
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
//end body-parser configuration

//create app server
var server = app.listen(3000,  "127.0.0.1", function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});

//rest api to get all customers
app.get('/customer', function (req, res) {
   connection.query('select * from customer', function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});
//rest api to get a single customer data
app.get('/customer/:id', function (req, res) {
   connection.query('select * from customers where Id=?', [req.params.id], function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

//rest api to create a new customer record into mysql database
app.post('/customer', function (req, res) {
  console.log("in Service");
  console.log(req.body);
  console.log(req.body.customer);
  var params=JSON.parse(req.body.customer)
  let data = {Name: req.body.Name,
              Country: req.body.Country,
              Phone: req.body.Phone,
             Address: req.body.Address};
   data = {Name: "AAAAe",
    Country: "Sy",
    Phone: 3242,
    Address: "213"};
  //  var params  = req.body;
   console.log(params);
  //  connection.query('INSERT INTO customer SET ?', data, function (error, results, fields) {
	//   if (error) throw error;
	//   res.end(JSON.stringify(results));
	// });
});

// Add a new user  
app.post('/user', function (req, res) {
  let user = req.body;
  console.log(req.body);
  if (!user) {
    return res.status(400).send({ error:true, message: 'Please provide user' });
  }
  connection.query("INSERT INTO customer SET ? ",user, function (error, results, fields) {
if (error) throw error;
  return res.send({ error: false, data: results, message: 'New user has been created successfully.' });
  });
});


// //rest api to create a new record into mysql database
// app.post('/employees', function (req, res) {
//    var postData  = req.body;
//    connection.query('INSERT INTO employee SET ?', postData, function (error, results, fields) {
// 	  if (error) throw error;
// 	  res.end(JSON.stringify(results));
// 	});
// });

//rest api to update record into mysql database
app.put('/customer', function (req, res) {
   connection.query('UPDATE `customer` SET `Name`=?,`Address`=?,`Country`=?,`Phone`=? where `Id`=?', [req.body.Name,req.body.Address, req.body.Country, req.body.Phone, req.body.Id], function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

//rest api to delete record from mysql database
app.delete('/customer', function (req, res) {
   console.log(req.body);
   connection.query('DELETE FROM `customer` WHERE `Id`=?', [req.body.Id], function (error, results, fields) {
	  if (error) throw error;
	  res.end('Record has been deleted!');
	});
});