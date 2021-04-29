import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';


@Component({
  selector: 'app-cart-tab',
  templateUrl: './cart-tab.component.html',
  styleUrls: ['./cart-tab.component.css']
})
export class CartTabComponent{
  public Order;
  public OrderValue;
  public array:any[]=[];
  public length:number=0;
  public i:number;
    constructor(
      public cartService: CartService
    ) { }
    ngOnInit() {
      this.getAllOrders();
    }
    
    getAllOrders() {
       this.Order = Object.keys(JSON.parse(localStorage.getItem("order"))).map(index => {
        let useraa = JSON.parse(localStorage.getItem("order"))[index];
        return useraa;  
    }); 
    console.log(this.Order);
    this.length=this.Order.length;
    }
  }

  

