package com.backend.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.model.Restaurant;

public interface RestaurantDao extends JpaRepository<Restaurant, Integer>{

}
