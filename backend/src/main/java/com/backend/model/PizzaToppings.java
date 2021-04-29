package com.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "pizza_toppings")
public class PizzaToppings {
	@Id
	private int id;
	private String topping;
	private int price;

	PizzaToppings() {

	}

	public PizzaToppings(int id, String topping, int price) {
		super();
		this.id = id;
		this.topping = topping;
		this.price = price;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTopping() {
		return topping;
	}

	public void setTopping(String topping) {
		this.topping = topping;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	@Override
	public String toString() {
		return "PizzaToppings [id=" + id + ", topping=" + topping + ", price=" + price + "]";
	}

}
