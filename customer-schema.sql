-- Inevitable fault logic...smh:````(
#DROP DATABASE IF EXISTS bamazon;

#CREATE DATABASE bamazon;
-- End

#USE bamazon;

-- Fault
#DROP TABLE IF EXISTS products;
/*
CREATE TABLE products(
	item_id INTEGER(10) AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER(5) NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Gunnar Glasses', 'Nerds', 50.60, 12),
	('Guinness', 'Beer', 14.99, 25),
    ('Linux Pro Magazine', 'Nerds', 9.99, 6),
    ('The Tick', 'Books', 19.99, 1),
    ('Do Androids Dream of Electric Sheep?', 'Books', 7.99, 20),
    ('Dumbek', 'Instruments', 59.99, 2),
    ('Ibanez RGX', 'Instruments', 499.99, 1),
    ('Modelo', 'Beer', 7.99, 60),
    ('Corsair Case PC', 'Nerds', 1299.99, 1),
    ('Anti-Static Wrist Strap', 'Nerds', 0.99, 200);
*/    
SELECT * FROM products;