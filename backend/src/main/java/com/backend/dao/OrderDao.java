package com.backend.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.model.Order;

public interface OrderDao extends JpaRepository<Order, Integer>{

}
