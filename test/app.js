const express =require('express') ;

var mysql = require('mysql');

var conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'mydb'
});

conn.connect();
// Set up the express app
const app = express();
const q='select * from employee'
const query='select employee.name,employee.info,branch.name as br_name  from employee INNER JOIN branch ON employee.branch_id=branch.id'
// get all todos
app.get('/api/employees', function(request, response){
    console.log("1111111")
    conn.query(query, function(error, results){
        if ( error ){
            response.status(400).send('Error in database operation');
        } else {
            response.status(200).send(results);
        }
    });
});

app.listen(3000, function () {
    console.log('Express server is listening on port 3000');
});

