package com.backend.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.model.PizzaToppings;

public interface PizzaToppingDao extends JpaRepository<PizzaToppings, Integer> {

}
