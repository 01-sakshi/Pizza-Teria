package com.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.model.Item;
import com.backend.service.RestaurantService;

@RestController
@CrossOrigin({"http://localhost:4200"}) 
@RequestMapping("/restaurant")
public class RestaurantController {
	
	@Autowired
	RestaurantService resService;
	@GetMapping("/{id}")
	public List<Item> findItemByRestaurant(@PathVariable int id) {
		return resService.FindAllItemsByRestaurant(id);
	}
}
