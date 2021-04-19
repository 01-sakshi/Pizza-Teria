//package com.backend.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.backend.dao.PizzaSizeService;
//import com.backend.model.Pizzasize;
//
//@RestController
//@RequestMapping("pizzaSize")
//@CrossOrigin(origins = { "https://hoppscotch.io", "http://localhost:4200" })
//public class PizzaSizeController {
//
//	@Autowired
//	PizzaSizeService pizzaSizeService;
//
//	@GetMapping("")
//	public Pizzasize findSize() {
//		return pizzaSizeService.findPizzaSize();
//	}
//}
