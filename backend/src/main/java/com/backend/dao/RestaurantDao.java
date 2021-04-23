package com.backend.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.backend.model.Restaurant;

public interface RestaurantDao extends JpaRepository<Restaurant, Integer>{
	@Query(value="SELECT * FROM restaurant where location_id = :id", nativeQuery=true)
	List<Restaurant> findAllRestaurantsByLocation(@Param("id")int id);
}
