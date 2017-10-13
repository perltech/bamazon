let mysql = require('mysql');
let inquirer = require('inquirer');

let keys = require('./keys.js');

let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : keys.sql,
    database : 'bamazon'
});

inquirer
.prompt([
    
])
.then(function(user) {

});

function displayAllProducts() {
	connection.query('SELECT * FROM products', function(error, results, fields) {
		if (error) throw error;
	  	console.log(results);
	});
}

connection.connect(function(err){
	if (err) throw err;
    //runEverything();
    displayAllProducts();
	connection.end();
})

