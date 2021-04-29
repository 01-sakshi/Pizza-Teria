package com.backend.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.model.Admin;
import com.backend.model.Login;

public interface AdminDao extends JpaRepository<Admin,String> {

//	Admin validateUser(Login login);

	

	
}
