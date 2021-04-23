import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RestaurantService {

  private data:any[] = [];

  public set restaurants(restaurants){
    this.data = restaurants;
  }
  public get restaurants(){
    return this.data;
  }
  public set restaurant(restaurant){
    this.data = restaurant;
  }
  public get location(){
    return this.data;
  }

  private host:string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getAllRestaurantsByLocations(id:number){
    return this.http.get(`${this.host}/location/${id}`);
  }
  findItemsByRestaurant(id){
    return this.http.get(`${this.host}/restaurant/${id}`);
  }
}
