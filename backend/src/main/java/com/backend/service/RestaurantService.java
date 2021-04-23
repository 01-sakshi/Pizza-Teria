package com.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.dao.ItemDao;
import com.backend.dao.LocationDao;
import com.backend.dao.RestaurantDao;
import com.backend.model.Item;
import com.backend.model.Location;
import com.backend.model.Restaurant;

@Service
public class RestaurantService {

	@Autowired
	RestaurantDao resDao;
	
	@Autowired
	ItemDao itemDao;

	public List<Restaurant> findAllRestaurantsByLocation(int id) {
		List<Restaurant> res=resDao.findAllRestaurantsByLocation(id);
		return res;
	}
	
	public List<Item> FindAllItemsByRestaurant(int id){
		List<Item> item=itemDao.FindItemsByRestaurant(id);
		return item;
	}
}