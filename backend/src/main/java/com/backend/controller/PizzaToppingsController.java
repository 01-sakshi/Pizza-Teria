//package com.backend.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.backend.dao.PizzaToppingsService;
//import com.backend.model.PizzaToppings;
//
//@RestController
//@RequestMapping("pizzaTop")
//@CrossOrigin(origins = { "https://hoppscotch.io", "http://localhost:4200" })
//public class PizzaToppingsController {
//
//	@Autowired
//	PizzaToppingsService pizzaToppingsService;
//
//	@GetMapping("")
//	public PizzaToppings findSize() {
//		return pizzaToppingsService.findPizzaToppings();
//	}
//}
//
