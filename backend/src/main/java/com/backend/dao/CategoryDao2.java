package com.backend.dao;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;


import com.backend.model.Category;
//import com.backend.model.Item;

public interface CategoryDao2 extends JpaRepository<Category, Integer>{

//	@Query(value="select * from Item where Item.category_id = :id",  nativeQuery = true)
//    List<Item> findAllItems(@Param("id") int id);
//
//	@Query(value="select name from category where id = :id",  nativeQuery = true)
//	public String findNameById(int id);	
	
}
