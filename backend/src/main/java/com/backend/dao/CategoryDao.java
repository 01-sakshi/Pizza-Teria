package com.backend.dao;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.backend.model.Category;
import com.backend.model.Item;

public interface CategoryDao extends JpaRepository<Item, Integer>{
	@Query(value="select * from Item where Item.category_id = :id and Item.restaurant_id = :rId",  nativeQuery = true)
    List<Item> findAllItems(@Param("id") int id,@Param("rId") int rId);

	@Query(value="select name from category where id = :id",  nativeQuery = true)
	public String findNameById(int id);	
}
