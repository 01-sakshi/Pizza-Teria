package com.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "location")
public class Location {
	@Id
	private int id;
	private String name;

	public Location() {
		super();
	}

	public Location(int id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Location [id=" + id + ", name=" + name + "]";
	}

}
