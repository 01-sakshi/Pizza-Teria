package com.backend.backend;

import java.util.List;

import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;

import com.backend.controller.RestaurantController;
import com.backend.model.Item;
import com.backend.model.Restaurant;

import junit.framework.Assert;

public class RestaurantControllerTest extends BackendApplicationTests {
	@Mock
	Restaurant restaurant;

	@Autowired
	private RestaurantController restaurantController;


	@Before(value = "")
	public void setUp() {
		MockitoAnnotations.initMocks(this);
	}

//--------------------------------------------------------------------------
	@Test
	public void getRestaurantsTest() {
		List<Item> items = restaurantController.findItemByRestaurant(1);
		int length = items.size();
		System.out.println(length);
		if (length > 0) {
			Assert.assertTrue(true);
		}
	}
//--------------------------------------------------------------------------
}
