package com.backend.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.model.Item;
import com.backend.model.Location;
import com.backend.model.Restaurant;
import com.backend.service.AdminService;
	


	@RestController
	@RequestMapping(value = "/api")
	@CrossOrigin({"http://localhost:4200"})
	
	public class AdminController 
	{

		@Autowired
		AdminService adminService;
		
		
		@PostMapping("/addItem")
		Item addItem(@RequestBody Item item)
		{
			System.out.println(item);
			return adminService.addItem(item);
		}
		
		
		@PostMapping("/addLocation")
		Location addLocation(String url,@RequestBody Location location)
		{
			return adminService.addLocation(location);
		}
		
		
		
		@PostMapping("/addRestaurant")
		Restaurant addRestaurant(@RequestBody Restaurant restaurant)
		{
			return adminService.addRestaurant(restaurant);
		}
			
		


		
	}

		
		

