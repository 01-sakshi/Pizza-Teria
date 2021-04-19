package com.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "orders")
public class Order {
	@Id
	private int id;
	private int item_id;
	private int quantity;
	private int price;
	private int status;
	
	public Order(int id, int item_id, int quantity, int price, int status) {
		super();
		this.id = id;
		this.item_id = item_id;
		this.quantity = quantity;
		this.price = price;
		this.status = status;
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
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "Order [id=" + id + ", item_id=" + item_id + ", quantity=" + quantity + ", price=" + price + ", status="
				+ status + "]";
	}
	
}
