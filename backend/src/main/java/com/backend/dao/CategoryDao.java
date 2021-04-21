package com.backend.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.backend.model.Category;
import com.backend.model.Item;

public interface CategoryDao extends JpaRepository<Category, Integer>{

	@Query(value="select * from Item where Item.category_id = :id",  nativeQuery = true)
   public List<Object> findAllItems(@Param("id") int id);
	
}
