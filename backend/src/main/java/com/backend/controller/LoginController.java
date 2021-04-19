package com.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.dao.UserDaoImpl;
import com.backend.model.Login;
import com.backend.model.User;

@RestController
@CrossOrigin
public class LoginController {

	@Autowired
	private UserDaoImpl userDao;

	@RequestMapping("/login")
	public Login showLogin() {
		return new Login();
	}

	@PostMapping("/login")
	public User loginProcess(@RequestBody Login login, Model model) {
		User user = null;
		user = userDao.validateUser(login);
		if (user != null)
			user.setPassword(null);
		return user;
	}

}
