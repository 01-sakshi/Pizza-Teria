package com.backend.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.model.User;

public interface UserDao extends JpaRepository<User, String> {
}