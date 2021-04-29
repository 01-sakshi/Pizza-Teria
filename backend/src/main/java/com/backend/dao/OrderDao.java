package com.backend.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.backend.model.Order;

public interface OrderDao extends JpaRepository<Order, Integer>{
	
	@Query(value="Select * from PlaceOrder where user_name= :username", nativeQuery=true)
	List<Order> FindOrderByUser(@Param("username")String uname);
	
	@Modifying
    @Query(value = "insert into PlaceOrder(id,user_name,restaurant_id,item_id,Quantity,Size,Toppings,Price) VALUES (null,(SELECT username FROM user WHERE username = :uname),(SELECT id FROM restaurant WHERE id = :rid),(SELECT id FROM item WHERE id = :Iid),:Q,:Size,:Top,:Price)", nativeQuery = true)
    @Transactional
    void CreateOrder(@Param("uname") String uname, @Param("rid") int id,@Param("Iid") int Iid,@Param("Q") int Q,@Param("Size") int Size,@Param("Top") String toppings,@Param("Price") int Price);

}
