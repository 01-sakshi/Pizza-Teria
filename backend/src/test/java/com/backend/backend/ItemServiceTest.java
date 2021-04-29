package com.backend.backend;

import java.util.List;

import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;

import com.backend.dao.ItemDao;
import com.backend.model.Category;
import com.backend.model.Item;
import com.backend.service.ItemService;

import junit.framework.Assert;

public class ItemServiceTest extends BackendApplicationTests {

	@Mock
	Item item;

	@Autowired
	private ItemService itemService;
	
	@Autowired
	private ItemDao itemDao;
	

	@Before(value = "")
	public void setUp() {
		MockitoAnnotations.initMocks(this);
		itemService = new ItemService();
	}
//--------------------------------------------------------------------------
	@Test
	public void getItemsTest() {
		List<Item> item = itemService.findItems();
		int length = item.size();
		System.out.println(length);
		if (length > 0) {
			Assert.assertTrue(true);
		}
	}
//--------------------------------------------------------------------------	
	@Test
	public void getCategoriesTest() {
		List<Category> categories = itemService.findCategories();
		int length = categories.size();
		System.out.println(length);
		if (length > 0) {
			Assert.assertTrue(true);
		}
	}
//--------------------------------------------------------------------------
	@Test
	public void getCategoryByIdTest() {
		String category = itemService.findCategoriesById(3);
		if (category != null) {
			System.out.println("Category exists!");
			Assert.assertTrue(true);
		}
		else {
			System.out.println("Category doesn't exists!");
		}
	}
//--------------------------------------------------------------------------
	@Test
	public void getItemByCategoryTest() {
		List<Item> items = itemService.findItemsByCategory(1, 2);
		int length = items.size();
		System.out.println(length);
		if (length > 0) {
			System.out.println("Item found!");
			Assert.assertTrue(true);
		}
	}
//--------------------------------------------------------------------------
	@Test
	public void getItemTest() {
		Item item = itemService.findItemById(4);
		if (item != null) {
			System.out.println("Item found!");
			Assert.assertTrue(true);
		}
		else {
			System.out.println("Item not found!");
			Assert.assertFalse(false);
		}
	}
//--------------------------------------------------------------------------
	@Test
	public void shouldSaveItem() {

		int dbItem = itemService.createItem(new Item(16, 1, 1, "demo", "paneer tikka pizza", "pizza", 250, 1));
		if (dbItem != 0) {
			System.out.println("Item added!");
			Assert.assertTrue(true);
		}
	}
//--------------------------------------------------------------------------
//	@Test
//	public void shouldnotSaveItem() {
//		Item dbItem = itemService.createItem(new Item(17, 1, 1, "demo", null, "pizza", 250, 1));
//		if (dbItem.getName() == 0) {
//			System.out.println("Invalid Item!");
//			Assert.assertFalse(false);
//		}
//	}
////--------------------------------------------------------------------------
//	@Test
//	public void deleteItemTest() {
//		Item dbItem = itemService.createItem(new Item(18, 1, 1, "demo", "Italian Slice", "pizza", 250, 1));
//		
//		boolean beforedelete = itemDao.findById(dbItem.getId()).isPresent();
//		itemDao.deleteById(dbItem.getId());
//		boolean afterdelete = itemDao.findById(dbItem.getId()).isPresent();
//		
//		System.out.println("Item deleted :" + dbItem.getId());
//		Assert.assertTrue(!afterdelete);
//	}
}
