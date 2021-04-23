package com.backend.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.backend.model.Item;

public interface ItemDao extends JpaRepository<Item, Integer> {
	
	@Query(value="Select * from Item where restaurant_id = :id", nativeQuery=true)
	List<Item> FindItemsByRestaurant(int id);

}
