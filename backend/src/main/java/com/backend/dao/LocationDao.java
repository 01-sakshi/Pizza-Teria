package com.backend.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.model.Location;

public interface LocationDao extends JpaRepository<Location, Integer> {

}
