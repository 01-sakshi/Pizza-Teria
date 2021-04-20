import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ItemService } from "../service/item.service";
import { PizzaSizeService } from "../service/pizza-size.service";
import { PizzaToppingService } from "../service/pizza-topping.service";
import { CartService } from '../service/cart.service';

@Component({
  selector: "app-view-product",
  templateUrl: "./view-product.component.html",
  styleUrls: ["./view-product.component.css"],
})
export class ViewProductComponent implements OnInit {
  constructor(
    public itemService: ItemService,
    public pizzaSizeService: PizzaSizeService,
    public pizzaToppingService: PizzaToppingService,
    private router: Router,
    private cartService: CartService
  ) {}

  addToCart() {
    this.router.navigate(["../home/cart-tab"]);
    // this.cartService.addToCart();
    window.alert('Your product has been added to the cart!');
  }
  
  ngOnInit(): void {
    this.getAllSizes();
    this.getAllToppings();
  }
  getAllToppings() {
    this.pizzaToppingService.getToppings().subscribe((res: any) => {
      console.log(res);
      this.pizzaToppingService.toppings = res;
    });
  }

  getAllSizes() {
    this.pizzaSizeService.getSizes().subscribe((res: any) => {
      console.log(res);
      this.pizzaSizeService.sizes = res;
    });
  }

  openCart() {
    this.router.navigate(["/home/cart-tab"]);
  }
}
