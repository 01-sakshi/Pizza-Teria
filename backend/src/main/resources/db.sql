CREATE DATABASE IF NOT EXISTS pizzateria;
USE pizzateria;

CREATE TABLE users (username varchar(20) NOT NULL, password varchar(50),
firstname varchar(30) NOT NULL, lastname varchar(30), email varchar(50),
address varchar(50), phone varchar(20), role bit(1) NOT NULL, primary key(username));


CREATE TABLE location(id INT(10) NOT NULL, name varchar(30), primary key(id));

CREATE TABLE restaurant(id INT(10) NOT NULL, location_id INT(10),
 name varchar(30), address varchar(50), 
primary key(id), FOREIGN KEY (location_id) REFERENCES location(id));

CREATE TABLE category ( id INT(10) NOT NULL, name varchar(30), primary key(id));


CREATE TABLE item(id INT(10) NOT NULL, category varchar(30), category_id INT(10),
image_Url varchar(1000), name VARCHAR(30),
price INT(10), quantity int(5),restaurant_id INT(10),
 primary key(id),
FOREIGN KEY (restaurant_id) REFERENCES restaurant(id),
FOREIGN KEY (category_id) REFERENCES category(id));

CREATE TABLE orders(id INT(10),item_id INT(10) , quantity int(5), price int(10),
status INT(10), primary key(id), FOREIGN KEY (item_id) REFERENCES item(id));

CREATE TABLE cart(id INT(10),item_id INT(10) , quantity int(5), price int(10)
, primary key(id), FOREIGN KEY (item_id) REFERENCES item(id));

Create Table pizzaSize(Size varchar(10),cost int(5),primary key(Size));
insert into pizzaSize values("Small",250);
insert into pizzaSize values("Medium",300);
insert into pizzaSize values("Large",400);

Create Table pizzaToppings(Id int,Topping varchar(50),cost int(5),primary key(Id));
insert into pizzaToppings values(1,"Cheese",50);
insert into pizzaToppings values(2,"Olive",30);
insert into pizzaToppings values(3,"ExtraCheese",70);

insert into restaurant values(1, 1,'PizzaHut','Punjagutta' );
insert into restaurant values(2,  1,'Dominos','HiTechCity');
-- insert into restaurant values(3, 2,'Flechazo', 'Manyata');
-- insert into restaurant values(4, 2,'Dominos', 'Whitefield');
-- insert into restaurant values(5, 2,'Flechazo','AkshayaNagar');
-- insert into restaurant values(6, 3,'PizzaHome', 'South Extension');
-- insert into restaurant values(7, 3,'Flechazo', 'Lajpat Ngar');
-- insert into restaurant values(8, 3,'Dominos', 'Mayur Vihar');
-- insert into restaurant values(9, 4,'PizzaHouse', 'Ashtapur');
-- insert into restaurant values(10, 4,'Dominos', 'Chandan Nagar');
-- insert into restaurant values(11, 4,'Dominos', 'Handewadi');
insert into item values (1, "pizza", 1, "https://img1.wsimg.com/isteam/stock/2999/:/", "Cheese burst pizza", 180, 5, 1);
insert into item values (2, "pizza",1, "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeN9ZmxOgfpz2fNKoay9gqh5sgKCkpSzbjEYbNuby5dhnJV-_C", "Tomato corn pizza", 120, 6, 1);

insert into location values(2,"Hyderabad");
insert into location values(1,"Bangalore");

insert into category values(1,"pizza");

insert into item values (3, "pizza", 1, "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2VIH8gqiZXtM5XbkSKefPMidImjnfSku_imKBCEaOB8Xxhdba", "Cheesy smoke paper pizza", 190, 4, 1);

insert into item values (4, "pizza", 1, "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7x6T2N0tJvT5QUkVL4ebbU-0CLxlpFGtT9kHwVttKu8odx3x5", "Mashroom magic pizza", 200, 5, 1);

 insert into item values (5, "pizza", 1, "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSH2laiUvjvONmyzXwco_fMEuulEB2vFhX1tCUcjwb02NU5d4gC", "Corn paper pizza", 130, 4, 1);

 insert into item values (6, "pizza", 1, "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTG2IO9fCVl7YpNo5wv2CtMOBKUNVBc5W47sh_wUOTwdzkgtwqW", "Tasty herbs pizza", 250, 6, 1);

 insert into item values (7, "pizza", 1, "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIGsLK0SsZ7lG0JcJI5oDEu3yfim78gfTwAqJkGixwo19TIkEi", "Veggy cheesy smoky pizza", 180, 3, 1);

 insert into pizza_size values (1, 20, "small");

 insert into pizza_size values (2, 40, "medium");

 insert into pizza_size values (3, 80, "large");

 insert into pizza_toppings values (1, 40, "olives");

insert into pizza_toppings values (2, 60, "extra cheese");

 insert into pizza_toppings values (3, 30, "jalepeno");

 insert into pizza_toppings values (4, 30, "capsicum");

insert into pizza_toppings values (5, 40, "tomato");

 insert into pizza_toppings values (6, 50, "pineapple");

 insert into pizza_toppings values (7, 20, "chillies");

 insert into pizza_toppings values (8, 35, "onion");
