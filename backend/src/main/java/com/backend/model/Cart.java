package com.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "cart")
public class Cart {
	@Id
	private int id;
	private int item_id;
	private int price;
	private int quantity;

	public Cart(int id, int item_id, int price, int quantity) {
		super();
		this.id = id;
		this.item_id = item_id;
		this.price = price;
		this.quantity = quantity;
	}

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

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	@Override
	public String toString() {
		return "Cart [id=" + id + ", item_id=" + item_id + ", price=" + price + ", quantity=" + quantity + "]";
	}

}
