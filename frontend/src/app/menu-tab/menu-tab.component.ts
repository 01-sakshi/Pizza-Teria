import { Component, Input, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';
import { ItemService } from '../service/item.service';
import { CartService } from '../service/cart.service';
import { CategoryService } from '../service/category.service';
import { RestaurantService } from '../service/restaurant.service';

@Component({
  selector: 'app-menu-tab',
  templateUrl: './menu-tab.component.html',
  styleUrls: ['./menu-tab.component.css'],
})

export class MenuTabComponent implements OnInit {
  [x: string]: any;
  n:number;
  ResId:number=JSON.parse(localStorage.getItem('Storeitems'));
  private loadComponent = false;c
  // @Input() msgFromParent1: any[];
  onProductClick(id) {
    this.itemService.findItemById(id).subscribe(
      (res:any) => {
        console.log(res);
        this.itemService.item = res;
        this.loadComponent=true;
      }
    );
    this.router.navigate(['/restaurants/menu-tab/view-product',this.itemService.item]);
  }
  constructor(public itemService:ItemService, private router: Router, public cartService: CartService, public categoryService: CategoryService, public resService:RestaurantService) {}
  ngOnInit() {
    this.getItemsByRestaurant(this.ResId);
      this.getAllItems();
      this.getAllCategories();
      
      // this.StoItem=JSON.parse(localStorage.getItem('Storeitems'));
  }
  getItemsByRestaurant(ResId) {
    this.resService.findItemsByRestaurant(ResId).subscribe((res: any) => {
      console.log(res);
      this.itemService.items = res;
      console.log(this.itemService.items);
    });
}
  getAllItemsByCategory(id:number) {
    console.log(id);
      this.categoryService.findItemByCategoryAndRestaurant(id,this.ResId).subscribe((res: any) => {
        console.log(res);
      this.itemService.items = res;
    });
    
  }
  getAllItems() {
    this.getItemsByRestaurant(this.ResId);
    this.itemService.getItems().subscribe((res: any) => {
      console.log(res);
      // this.itemService.items = res;
    });
  }
  getAllRestaurantsByLocations(id) {
    this.resService.getAllRestaurantsByLocations(id).subscribe((res: any) => {
      console.log(res);
      this.resService.restaurants = res;
    });
  }

  getAllCategories() {
    this.categoryService.getCategory().subscribe((res: any) => {
      console.log(res);
      this.categoryService.categories = res;
    });
  }
 
  
}
