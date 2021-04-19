package com.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "pizzaSize")
public class PizzaSize {
	@Id
	private int id;
	private String size;
	private int price;

	PizzaSize() {

	}

	public PizzaSize(int id, String size, int price) {
		super();
		this.id = id;
		this.size = size;
		this.price = price;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	@Override
	public String toString() {
		return "PizzaSize [id=" + id + ", size=" + size + ", price=" + price + "]";
	}

}
