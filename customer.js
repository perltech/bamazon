// Need to export the module, but how?
let mysql = require('mysql');
let inquirer = require('inquirer');

let keys = require('./keys.js');

let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : keys.sql,
    database : 'bamazon'
});

function displayAllProducts() {
	connection.query('SELECT * FROM products', function(error, results, fields) {
		if (error) throw error;
        console.log(results);
        itemSelection(results);  
    });
}

function changeQuantity(quantity, product) {
    connection.query( "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?", [quantity, product.item_id], function(err, res) {
          console.log("\nYou bought " + quantity + " " + product.product_name + "s!");
          displayAllProducts();
          //connection.end();
        }
    );
}

function itemSelection() {
    //Correct connections so that it doesn't dial in at the wrong time and display the data so ugly
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'item_id',
            message: "What is the id of the item you'd like to purchase?"
        },
        {
            type: 'input',
            name: 'quantity',
            message: 'How many would you like?'
        }
    ])
    .then(function(user) {
        connection.query('SELECT * FROM products WHERE item_id =?', [user.item_id], function(error, results, fields) {
            if (error){
                throw error;
            } 
			else if(results.stock_quantity === 0) {
                console.log("Out of Stock!");
            } else {
                changeQuantity(user.quantity, user);
                console.log(results);
                connection.end();
            }
        });
    });
}

connection.connect(function(err){
	if (err) throw err;
    displayAllProducts();
});

