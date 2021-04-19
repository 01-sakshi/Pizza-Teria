package com.backend.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.model.PizzaSize;

public interface PizzaSizeDao extends JpaRepository<PizzaSize, Integer> {

}
