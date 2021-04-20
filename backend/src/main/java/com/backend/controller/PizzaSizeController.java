package com.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.dao.PizzaSizeService;
import com.backend.model.PizzaSize;

@RestController
@RequestMapping("sizes")
@CrossOrigin({ "http://localhost:4200" })
public class PizzaSizeController {
	@Autowired
	PizzaSizeService pizzaSizeService;

	@GetMapping("/{id}")
	public PizzaSize findSizeById(@PathVariable int id) {
		return pizzaSizeService.findSizeById(id);
	}

	@GetMapping("")
	public List<PizzaSize> findSizes() {
		return pizzaSizeService.findSizes();
	}

	@PostMapping("")
	public int createSize(@RequestBody PizzaSize pizzaSize) {
		System.out.println(pizzaSize);
		return pizzaSizeService.createSize(pizzaSize);
	}

	@PutMapping("/{id}")
	public boolean editSize(@PathVariable int id, @RequestBody PizzaSize pizzaSize) {
		return pizzaSizeService.editSize(id, pizzaSize);
	}

	@DeleteMapping("/{id}")
	public boolean deleteSize(@PathVariable int id) {
		pizzaSizeService.deleteSize(id);
		return true;
	}

}
