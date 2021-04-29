import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { Item } from '../model/item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }
  item: Item = {} as Item;
  flag:boolean=false;
  ngOnInit() {
  }
  private  host:string="http://localhost:8080/api/addItem";
  addItem(item_id:number,category:string,category_id:number,image_url:string,item_name:string,price:number,quantity:number,restaurant_id:number){
    this.item.id=item_id;
    this.item.category=category;
    this.item.category_id=category_id;
    this.item.image_Url=image_url;
    this.item.name=item_name;
    this.item.price=price;
    this.item.quantity=quantity;
    this.item.restaurant_id=restaurant_id;
    console.log(this.item.id);
    console.log(this.item);
    this.http.post<Item>(this.host,this.item).subscribe(
  
  
      (res) => {
        
        this.flag=true;
        return this.http.post<Item>(`${this.host}`,this.item);
        
      },
      (err) => {
        
        alert("An error has occurred while adding the item");
        console.log(this.item);
        this.flag=false;
      }
    );
    if(this.flag)
    window.alert('item details was added successfully');

    
  }

}
