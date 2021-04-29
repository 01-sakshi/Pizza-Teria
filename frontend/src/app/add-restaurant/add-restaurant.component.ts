import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from './../model/Restaurant';
@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }
  restaurant: Restaurant = {} as Restaurant;
  flag:boolean=false;
  ngOnInit() {
  }
  private  host:string="http://localhost:8080/api/addRestaurant";
addRestaurant(restaurant_id:number,location_id:number,name:string, address:string){
this.restaurant.id=restaurant_id;
this.restaurant.location_id=location_id;
this.restaurant.name=name;
this.restaurant.address=address;
console.log(address);
this.http.post<Restaurant>(this.host,this.restaurant).subscribe(
  
  
  (res) => {
    console.log(this.restaurant); 
    this.flag=true;
    return this.http.post<Restaurant>(`${this.host}`,this.restaurant);
    
    
  },
  (err) => {
    
    this.flag=false;
    alert("An error has occurred while adding the restaurant");
   
  }
);
if(this.flag)
window.alert('restaurant was added successfully');



}
  }









