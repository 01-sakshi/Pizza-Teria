package com.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.dao.UserDao;
import com.backend.model.Login;
import com.backend.model.User;

@Service
public class UserService{

    @Autowired
    private UserDao userDao;
    public void register(User user) {
        userDao.save(user);
    }
    public User validateUser(Login login) {
        User user = null;
        if (userDao.findById(login.getUsername()).isPresent()) {
            user = userDao.findById(login.getUsername()).get();
            if(!user.getPassword().equals(login.getPassword()))
                user=null;
        }
        return user;
    }

    public Boolean usernameExists(String username){
       return userDao.findById(username).isPresent();
    }

	public User editUser( String id,User user) {
		
			System.out.println(userDao.findById(id));
			User existUser = userDao.findById(id).orElse(null);
			existUser.setUsername(user.getUsername());
			existUser.setPassword(user.getPassword());
			existUser.setFirstname(user.getFirstname());
			existUser.setLastname(user.getLastname());
			existUser.setEmail(user.getEmail());
			existUser.setAddress(user.getAddress());
			existUser.setPhone(user.getPhone());
			return userDao.save(existUser);
		
	}

	public Optional<User> findUserById(String id) {
		if((userDao.findById(id))==null)
		{
			System.out.println("Invalid User" +userDao.findById(id));
			return null;
		}
		else {
			System.out.println("user exists" +userDao.findById(id));
			return userDao.findById(id);
		}
	}
}
