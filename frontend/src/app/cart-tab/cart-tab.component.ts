import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';


@Component({
  selector: 'app-cart-tab',
  templateUrl: './cart-tab.component.html',
  styleUrls: ['./cart-tab.component.css']
})
export class CartTabComponent{
    constructor(
      public cartService: CartService
    ) { }
  }

