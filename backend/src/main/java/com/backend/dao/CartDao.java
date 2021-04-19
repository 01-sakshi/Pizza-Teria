package com.backend.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.model.Cart;

public interface CartDao extends JpaRepository<Cart, Integer> {

}
