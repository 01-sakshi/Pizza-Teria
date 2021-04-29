package com.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Admin {
	
	
@Id
private String mailId;
private String password;

public Admin(String mailId, String password) {
	super();
	this.mailId = mailId;
	this.password = password;
}
public Admin() {
	super();
}
public String getMailId() {
	return mailId;
}
public void setMailId(String mailId) {
	this.mailId = mailId;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
@Override
public String toString() {
	return "Admin [mailId=" + mailId + ", password=" + password + "]";
}



}
