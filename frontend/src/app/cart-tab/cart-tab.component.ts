import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';


@Component({
  selector: 'app-cart-tab',
  templateUrl: './cart-tab.component.html',
  styleUrls: ['./cart-tab.component.css']
})
export class CartTabComponent{
    items = this.cartService.getItems();
  
    constructor(
      private cartService: CartService
    ) { }
  }

