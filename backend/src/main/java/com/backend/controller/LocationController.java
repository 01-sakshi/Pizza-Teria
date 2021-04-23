package com.backend.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.dao.LocationDao;
import com.backend.dao.RestaurantDao;
import com.backend.model.Location;
import com.backend.model.Restaurant;
import com.backend.service.LocationService;
import com.backend.service.RestaurantService;


@RestController
@CrossOrigin
@RequestMapping("/location")
public class LocationController{
	@Autowired
	LocationService locService;
	@Autowired
    RestaurantService resService;
	
	@GetMapping("/{id}")
	public List<Restaurant> findLocationById(@PathVariable int id) {
		return 	resService.findAllRestaurantsByLocation(id);
	}

	@GetMapping("")
	public List<Location> findLocations(){
		return locService.findLocations();
	}
}