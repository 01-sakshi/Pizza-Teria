import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../service/item.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-menu-tab',
  templateUrl: './menu-tab.component.html',
  styleUrls: ['./menu-tab.component.css'],
})
export class MenuTabComponent implements OnInit {
  selectedCategory: string = 'PIZZA';
  categories: string[] = ['PIZZA', 'DRINKS'];

  onProductClick(id) {
    this.itemService.findItemById(id).subscribe(
      (res:any) => {
        console.log(res);
        // if(id == 1){
        //   this.router.navigate(['/home/menu-tab/view-product']);
        // }
        // if(id == 2){
        //   this.router.navigate(['/home/cart-tab']);
        // }
        this.itemService.item = res;
      }
    );
    this.router.navigate(['/restaurants/menu-tab/view-product']);
  }

  constructor(public itemService:ItemService, private router: Router, private cartService: CartService) {}
  ngOnInit() {
    this.getAllItems();
  }

  // ----------------------------------------------------------------------------
  getAllItems() {
    this.itemService.getItems().subscribe((res: any) => {
      console.log(res);
      this.itemService.items = res;
    });
  }


}
