package com.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//import com.backend.model.Item;
import com.backend.model.Order;
import com.backend.model.PizzaSize;
import com.backend.service.OrderService;

@RestController
@CrossOrigin
@RequestMapping("/order")
public class OrderController {
	@Autowired
	OrderService orderService;
	
	@PostMapping("/{uname}/{rId}/{itemid}/{Quantity}/{Size}/{Toppings}/{price}")
	public void createItem(@PathVariable String uname ,@PathVariable int rId,@PathVariable int itemid,@PathVariable int Quantity ,@PathVariable int Size,@PathVariable String Toppings,@PathVariable int price) {
		System.out.println(rId);
		orderService.createOrder(uname,rId,itemid,Quantity,Size,Toppings,price);
	}
	@GetMapping("/{uname}")
	public List<Order> findSizes(@PathVariable String uname) {
		return orderService.findOrderByUserId(uname);
	}
}
