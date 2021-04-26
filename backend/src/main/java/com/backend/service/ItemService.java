package com.backend.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.dao.CategoryDao;
import com.backend.dao.CategoryDao2;
//import com.backend.dao.CategoryDao;
import com.backend.dao.ItemDao;
import com.backend.model.Category;
//import com.backend.model.Category;
import com.backend.model.Item;

@Service
public class ItemService {

	@Autowired
	ItemDao itemDao;
	
	@Autowired
	CategoryDao catDao;
	
	@Autowired
	CategoryDao2 catDao2;

	public Item findItemById(int id) {

		Optional<Item> optional = itemDao.findById(id);
		Item item = optional.orElse(null);

		System.out.println(item);

		return item;
	}

	public List<Item> findItems() {
		Iterable<Item> iterable = itemDao.findAll();
		Iterator<Item> iterator = iterable.iterator();
		List<Item> items = new ArrayList<Item>();

		while (iterator.hasNext()) {
			items.add(iterator.next());
		}

		return items;
	}

	public List<Item> findItemsByCategory(int a,int b) {
		List<Item> cat = catDao.findAllItems(a,b);
		return cat;
	}

	public int createItem(Item item) {

		item = itemDao.save(item);
		return item.getId();
	}

	public boolean editItem(int id, Item item) {
		item.setId(id);
		itemDao.save(item);

		return true;
	}

	public void deleteItem(int id) {
		itemDao.deleteById(id);
	}

	public List<Category> findCategories() {
		List<Category> cate=catDao2.findAll();
		return cate;
	}

	public String findCategoriesById(int id) {
		String cate=catDao.findNameById(id);
		return cate;
	}
}
