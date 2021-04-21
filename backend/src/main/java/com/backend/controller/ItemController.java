package com.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.model.Category;
import com.backend.model.Item;
import com.backend.service.ItemService;

@RestController
@RequestMapping("items")
@CrossOrigin({"http://localhost:4200"}) 
public class ItemController {
	
	@Autowired
	ItemService itemService;

	
	@GetMapping("/{id}")
	public Item findItemById(@PathVariable int id) {
		return itemService.findItemById(id);
	}

	// localhost:8080/items
	@GetMapping("")
	public List<Item> findItems(){
		return itemService.findItems();
	}
	
	@GetMapping("/cat/{id}")
	public List<Object> findItemsByCategory(@PathVariable int id){
		return itemService.findItemsByCategory(id);
	}
	
	@PostMapping("")
	public int createItem(@RequestBody Item item) {
		System.out.println(item);
		return itemService.createItem(item);
	}
	
	@PutMapping("/{id}")
	public boolean editItem(@PathVariable int id,@RequestBody Item item) {
		return itemService.editItem(id, item);
	}
	
	@DeleteMapping("/{id}")
	public boolean deleteItem(@PathVariable int id) {
		itemService.deleteItem(id);
		return true;
	}
}
