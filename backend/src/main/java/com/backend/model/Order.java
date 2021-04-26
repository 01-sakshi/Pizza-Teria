package com.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "OrderCart")
public class Order {
	@Id
	private int id;
//	id,user_name,restaurant_id,item_id,Quantity,Size,Toppings,Price
	//	CREATE TABLE orderss(id INT(10) NOT NULL auto_increment, user_name varchar(20), restaurant_id Int(10), item_id int(10), Quantity int(10), Size int(10), Toppings varchar(20), Price int(50),
//			primary key(id), FOREIGN KEY (user_name) REFERENCES users(username), FOREIGN KEY (restaurant_id) REFERENCES restaurant(id),  FOREIGN KEY (item_id) REFERENCES item(id));
	private int item_id;
	private String user_name;
	private int Quantity;
	private int restaurant_id;
	private int Price;
	private int Size;
	private String Toppings;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getItem_id() {
		return item_id;
	}
	public void setItem_id(int item_id) {
		this.item_id = item_id;
	}
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	public int getQuantity() {
		return Quantity;
	}
	public void setQuantity(int quantity) {
		Quantity = quantity;
	}
	public int getRestaurant_id() {
		return restaurant_id;
	}
	public void setRestaurant_id(int restaurant_id) {
		this.restaurant_id = restaurant_id;
	}
	public int getPrice() {
		return Price;
	}
	public void setPrice(int price) {
		this.Price = price;
	}
	public Order() {
		super();
	}
	public int getSize() {
		return Size;
	}
	public void setSize(int size) {
		this.Size = size;
	}
	public String getToppings() {
		return Toppings;
	}
	public void setToppings(String toppings) {
		this.Toppings = toppings;
	}
	public Order(int id, int item_id, String user_name, int quantity, int restaurant_id, int price, int size,
			String toppings) {
		super();
		this.id = id;
		this.item_id = item_id;
		this.user_name = user_name;
		Quantity = quantity;
		this.restaurant_id = restaurant_id;
		this.Price = price;
		this.Size = size;
		this.Toppings = toppings;
	}
	
	
	
}
