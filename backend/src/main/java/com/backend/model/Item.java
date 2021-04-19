package com.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "itemss")
public class Item {
	@Id
	private int id;
	private int restaurant_id;
	private int category_id;
	private String imageUrl;
	private String name;
	private String category;
	private int price;
	private int quantity;

	Item() {

	}

	public Item(int id, int restaurant_id, int category_id, String imageUrl, String name, String category, int price,
			int quantity) {
		super();
		this.id = id;
		this.restaurant_id = restaurant_id;
		this.category_id = category_id;
		this.imageUrl = imageUrl;
		this.name = name;
		this.category = category;
		this.price = price;
		this.quantity = quantity;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getRestaurant_id() {
		return restaurant_id;
	}

	public void setRestaurant_id(int restaurant_id) {
		this.restaurant_id = restaurant_id;
	}

	public int getCategory_id() {
		return category_id;
	}

	public void setCategory_id(int category_id) {
		this.category_id = category_id;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
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
		return "Item [id=" + id + ", restaurant_id=" + restaurant_id + ", category_id=" + category_id + ", imageUrl="
				+ imageUrl + ", name=" + name + ", category=" + category + ", price=" + price + ", quantity=" + quantity
				+ "]";
	}

}
