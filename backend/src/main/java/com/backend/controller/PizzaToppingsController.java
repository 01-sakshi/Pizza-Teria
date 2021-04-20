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

import com.backend.dao.PizzaToppingsService;
import com.backend.model.PizzaToppings;

@RestController
@RequestMapping("toppings")
@CrossOrigin({ "http://localhost:4200" })
public class PizzaToppingsController {

	@Autowired
	PizzaToppingsService pizzaToppingsService;

	@GetMapping("/{id}")
	public PizzaToppings findToppingById(@PathVariable int id) {
		return pizzaToppingsService.findToppingById(id);
	}

	@GetMapping("")
	public List<PizzaToppings> findToppings() {
		return pizzaToppingsService.findToppings();
	}

	@PostMapping("")
	public int createTopping(@RequestBody PizzaToppings pizzaToppings) {
		System.out.println(pizzaToppings);
		return pizzaToppingsService.createTopping(pizzaToppings);
	}

	@PutMapping("/{id}")
	public boolean editTopping(@PathVariable int id, @RequestBody PizzaToppings pizzaToppings) {
		return pizzaToppingsService.editTopping(id, pizzaToppings);
	}

	@DeleteMapping("/{id}")
	public boolean deleteTopping(@PathVariable int id) {
		pizzaToppingsService.deleteTopping(id);
		return true;
	}

}
