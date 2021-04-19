package com.backend.dao;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.model.PizzaSize;
import com.backend.dao.PizzaSizeDao;
@Service
public class PizzaSizeService {

	@Autowired
	PizzaSizeDao pizzaSizeDao;

	public PizzaSize findSizeById(int id) {

		Optional<PizzaSize> optional = pizzaSizeDao.findById(id);
		PizzaSize pizzaSize = optional.orElse(null);

		System.out.println(pizzaSize);

		return pizzaSize;
	}

	public List<PizzaSize> findSizes() {
		Iterable<PizzaSize> iterable = pizzaSizeDao.findAll();
		Iterator<PizzaSize> iterator = iterable.iterator();
		List<PizzaSize> sizes = new ArrayList<PizzaSize>();

		while (iterator.hasNext()) {
			sizes.add(iterator.next());
		}

		return sizes;
	}

	public int createSize(PizzaSize pizzaSize) {

		pizzaSize = pizzaSizeDao.save(pizzaSize);
		return pizzaSize.getId();
	}

	public boolean editSize(int id, PizzaSize pizzaSize) {
		pizzaSize.setId(id);
		pizzaSizeDao.save(pizzaSize);

		return true;
	}

	public void deleteSize(int id) {
		pizzaSizeDao.deleteById(id);
	}

}
