import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';
import { ItemService } from '../service/item.service';
import { CartService } from '../service/cart.service';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-menu-tab',
  templateUrl: './menu-tab.component.html',
  styleUrls: ['./menu-tab.component.css'],
})
export class MenuTabComponent implements OnInit {
  [x: string]: any;
  selectedCategory: string = 'PIZZA';
  n:number=0;
  // categories: string[] = ['PIZZA', 'BURGER'];

  onProductClick(id) {
    this.itemService.findItemById(id).subscribe(
      (res:any) => {
        console.log(res);
        this.itemService.item = res;
      }
    );

    this.router.navigate(['/restaurants/menu-tab/view-product']);
  }
  

  constructor(public itemService:ItemService, private router: Router, public cartService: CartService, public categoryService: CategoryService) {}
  ngOnInit() {
      // this.getAllItemsByCategory();
      this.getAllItems();
      this.getAllCategories();
  }
  getAllItemsByCategory(id:String) {
    console.log(id);
    // console.log(this.cat);
    if(id==="pizza"){
      this.categoryService.findItemByCategory(1).subscribe((res: any) => {
        console.log(res);
      // this.itemService.items = res;
    });
    }
    else if(id==="Burger"){
      this.categoryService.findItemByCategory(2).subscribe((res: any) => {
        console.log(res);
      // this.categoryService.categories = res;
    });
    }
  }
  getAllItems() {
    this.itemService.getItems().subscribe((res: any) => {
      console.log(res);
      this.itemService.items = res;
    });
  }

  getAllCategories() {
    this.categoryService.getCategory().subscribe((res: any) => {
      console.log(res);
      this.categoryService.categories = res;
    });
  }
}
