package com.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "restaurant")
public class Restaurant {
	@Id
	private int id;
	private int location_id;
	private String address;
	private String name;

	public Restaurant(int id, int location_id, String address, String name) {
		super();
		this.id = id;
		this.location_id = location_id;
		this.address = address;
		this.name = name;
	}

	public Restaurant() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getLocation_id() {
		return location_id;
	}

	public void setLocation_id(int location_id) {
		this.location_id = location_id;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Restaurant [id=" + id + ", location_id=" + location_id + ", address=" + address + ", name=" + name
				+ "]";
	}

}
