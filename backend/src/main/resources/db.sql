USE pizzateria;

CREATE TABLE users (username varchar(20) NOT NULL, password varchar(50),
firstname varchar(30) NOT NULL, lastname varchar(30), email varchar(50),
address varchar(50), phone varchar(20), role bit(1) NOT NULL, primary key(username));

CREATE TABLE location(id INT(10) NOT NULL, name varchar(30), primary key(id));

CREATE TABLE restaurant(id INT(10) NOT NULL, location_id INT(10),
 name varchar(30), address varchar(50), 
primary key(id), FOREIGN KEY (location_id) REFERENCES location(id));

CREATE TABLE category ( id INT(10) NOT NULL, name varchar(30), primary key(id));

# DROP TABLE item;

CREATE TABLE item(id INT(10) NOT NULL, restaurant_id INT(10), category_id INT(10),
imageUrl varchar(1000), name VARCHAR(30),
category varchar(30), size varchar(30),
toppings varchar(50), price INT(10), quantity int(5), primary key(id),
FOREIGN KEY (restaurant_id) REFERENCES restaurant(id),
FOREIGN KEY (category_id) REFERENCES category(id));

CREATE TABLE orders(id INT(10),item_id INT(10) , quantity int(5), price int(10),
status INT(10), primary key(id), FOREIGN KEY (item_id) REFERENCES item(id));

CREATE TABLE cart(id INT(10),item_id INT(10) , quantity int(5), price int(10)
, primary key(id), FOREIGN KEY (item_id) REFERENCES item(id));



