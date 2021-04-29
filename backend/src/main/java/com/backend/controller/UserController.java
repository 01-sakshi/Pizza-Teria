package com.backend.controller;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.model.User;
import com.backend.service.UserService;


@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins="http://localhost:4200")
public class UserController {

	@Autowired
 UserService userService;


	@PutMapping("/editUser/{id}")
	User editUser( @PathVariable String id,@RequestBody User user) {
		return userService.editUser( id,user);
	}

	@GetMapping("/findUserById/{id}")
	Optional<User> findUserById(@PathVariable String id) {
		return userService.findUserById(id);
	}

	
}

	
	
