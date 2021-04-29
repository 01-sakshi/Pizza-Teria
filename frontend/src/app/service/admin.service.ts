import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { AdminComponent } from './../admin/admin.component';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  private data:any[] = [];

  public set items(items){
    this.data = items;
  }
  public get items(){
    return this.data;
  }
  public set item(item){
    this.data = item;
  }
  public get item(){
    return this.data;
  }
  public set restaurant(restaurant){
    this.data = restaurant;
  }
  public get restaurant(){
    return this.restaurant;
  }
  public set location(location){
    this.data = location;
  }
  public get location(){
    return this.data;
  }

  private host:string = "http://localhost:8080";

 

  getItems(){
    return this.http.get(`${this.host}/items`);
  }
  findItemById(id){
    return this.http.get(`${this.host}/items/${id}`);
  }
  findItemByCategory(id){
    return this.http.get(`${this.host}/items/cat/${id}`);
  }
  saveItem(item){
    return this.http.post(`${this.host}/items`, item);
  }
  addItem(item)
  {
    return this.http.post(`${this.host}/api/addItem`,item)
  }
  addRestaurant(restaurant)
  {
    return this.http.post(`${this.host}/api/addRestaurant`,restaurant)
  }
  addLocation(item)
  {
    return this.http.post(`${this.host}/api/addLocation`,location)
  }
 
}

