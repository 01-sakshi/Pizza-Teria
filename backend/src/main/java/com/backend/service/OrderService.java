package com.backend.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.dao.CategoryDao;
import com.backend.dao.OrderDao;
//import com.backend.dao.CategoryDao;
import com.backend.dao.ItemDao;
import com.backend.model.Category;
//import com.backend.model.Category;
import com.backend.model.Item;
import com.backend.model.Order;

@Service
public class OrderService {


	@Autowired
	ItemDao itemDao;
	
	@Autowired
	CategoryDao catDao;
	
	@Autowired
	OrderDao ordDao;

	public List<Order> findOrderByUserId(String uname) {
		List<Order> orders = ordDao.FindOrderByUser(uname);

		return orders;
	}


	public void createOrder(String uname, int rid, int itemid,int Quantity,int Size,String Toppings,int price) {
		ordDao.CreateOrder(uname, rid, itemid,Quantity,Size,Toppings,price);
//		return O;
	}

}
