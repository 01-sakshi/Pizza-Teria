package com.backend.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.dao.LocationDao;
import com.backend.model.Location;


@Service
public class LocationService {
	@Autowired
		LocationDao locDao;
public Location findLocationById(int id) {
		Optional<Location> optional = locDao.findById(id);
		Location location = optional.orElse(null);
		System.out.println(location);
		
		return location;
	}
public List<Location> findLocations(){
	Iterable<Location> iterable = locDao.findAll();
	Iterator<Location> iterator = iterable.iterator();
	List<Location> locations = new ArrayList<Location>();

	while(iterator.hasNext()){
		locations.add(iterator.next());
	}

	return locations;
}
}
