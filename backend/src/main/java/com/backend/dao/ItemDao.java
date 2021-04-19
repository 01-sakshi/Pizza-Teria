package com.backend.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.model.Item;

public interface ItemDao extends JpaRepository<Item, Integer> {

}
