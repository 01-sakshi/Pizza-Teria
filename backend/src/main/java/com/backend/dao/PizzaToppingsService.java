package com.backend.dao;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.model.PizzaToppings;

@Service
public class PizzaToppingsService {

	@Autowired
	PizzaToppingDao pizzaToppingDao;

	public PizzaToppings findToppingById(int id) {

		Optional<PizzaToppings> optional = pizzaToppingDao.findById(id);
		PizzaToppings pizzaToppings = optional.orElse(null);

		System.out.println(pizzaToppings);

		return pizzaToppings;
	}

	public List<PizzaToppings> findToppings() {
		Iterable<PizzaToppings> iterable = pizzaToppingDao.findAll();
		Iterator<PizzaToppings> iterator = iterable.iterator();
		List<PizzaToppings> toppings = new ArrayList<PizzaToppings>();

		while (iterator.hasNext()) {
			toppings.add(iterator.next());
		}

		return toppings;
	}

	public int createTopping(PizzaToppings pizzaToppings) {

		pizzaToppings = pizzaToppingDao.save(pizzaToppings);
		return pizzaToppings.getId();
	}

	public boolean editTopping(int id, PizzaToppings pizzaToppings) {
		pizzaToppings.setId(id);
		pizzaToppingDao.save(pizzaToppings);

		return true;
	}

	public void deleteTopping(int id) {
		pizzaToppingDao.deleteById(id);
	}
}
