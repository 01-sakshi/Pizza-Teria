package com.backend.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.dao.ItemDao;
import com.backend.dao.LocationDao;
import com.backend.dao.RestaurantDao;
import com.backend.model.Item;
import com.backend.model.Location;
import com.backend.model.Restaurant;


@Service
public class AdminService {
	
	@Autowired
	ItemDao itemDao;
	
	@Autowired
	LocationDao locationDao;
	
	
	@Autowired
	RestaurantDao restaurantDao;
	
	
	public Item addItem(Item item) {
		
		return itemDao.save(item);
		
	}
	
	
	public Location addLocation(Location location)
	{
		
		return locationDao.save(location);
		
	}
	
	public Restaurant addRestaurant(Restaurant restaurant)
	{
	
		return restaurantDao.save(restaurant);
		
	}
}





  
    
