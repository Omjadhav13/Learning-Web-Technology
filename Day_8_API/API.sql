create database APIs;
use apis;
CREATE TABLE products (
    id INT  PRIMARY KEY,
    pname VARCHAR(100) NOT NULL,
    pprice DECIMAL(10, 2) NOT NULL,
    pcompany VARCHAR(100),
    pquantity INT DEFAULT 0
);
INSERT INTO products (id, pname, pprice, pcompany, pquantity) VALUES
(1, 'Laptop', 1200.50, 'TechCorp', 10),
(2, 'Smartphone', 800.00, 'MobileInc', 25),
(3, 'Headphones', 150.75, 'SoundLtd', 50),
(4, 'Monitor', 300.00, 'DisplayCo', 15),
(5, 'Keyboard', 45.99, 'KeyMakers', 40);

SELECT user, host, authentication_string, plugin FROM mysql.user WHERE user='root';

