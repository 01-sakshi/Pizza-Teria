import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../service/item.service';

@Component({
  selector: 'app-menu-tab',
  templateUrl: './menu-tab.component.html',
  styleUrls: ['./menu-tab.component.css'],
})
export class MenuTabComponent implements OnInit {
  selectedCategory: string = 'PIZZA';
  categories: string[] = ['PIZZA', 'DRINKS'];
  // pizzaProducts = [
  //   {
  //     imgPath: 'https://img1.wsimg.com/isteam/stock/2999/:/',
  //     price: 12.5,
  //     name: 'Cheese burst pizza',
  //   },
  //   {
  //     imgPath:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeN9ZmxOgfpz2fNKoay9gqh5sgKCkpSzbjEYbNuby5dhnJV-_C',
  //     price: 15,
  //     name: 'Tomato corn pizza',
  //   },
  //   {
  //     imgPath:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2VIH8gqiZXtM5XbkSKefPMidImjnfSku_imKBCEaOB8Xxhdba',
  //     price: 5.9,
  //     name: 'Cheesy smoke paper pizza',
  //   },
  //   {
  //     imgPath:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7x6T2N0tJvT5QUkVL4ebbU-0CLxlpFGtT9kHwVttKu8odx3x5',
  //     price: 2.5,
  //     name: 'Mashroom magic pizza',
  //   },
  //   {
  //     imgPath:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSH2laiUvjvONmyzXwco_fMEuulEB2vFhX1tCUcjwb02NU5d4gC',
  //     price: 16.2,
  //     name: 'Corn paper pizza',
  //   },
  //   {
  //     imgPath:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTG2IO9fCVl7YpNo5wv2CtMOBKUNVBc5W47sh_wUOTwdzkgtwqW',
  //     price: 15.5,
  //     name: 'Tasty herbs pizza',
  //   },
  //   {
  //     imgPath:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIGsLK0SsZ7lG0JcJI5oDEu3yfim78gfTwAqJkGixwo19TIkEi',
  //     price: 8.95,
  //     name: 'Veggy cheesy smoky pizza',
  //   },
  //   {
  //     imgPath:
  //       'https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2018/05/paneer-pizza-recipe-1-500x375.jpg',
  //     price: 4.5,
  //     name: 'Paneer pyara pizza',
  //   },
  // ];

  // drinksProducts = [
  //   {
  //     imgPath:
  //       'https://miro.medium.com/max/11520/1*wRSrqe_WdsPsv4XdHDou6Q.jpeg',
  //     price: 2,
  //     name: 'Thandai mix',
  //   },
  //   {
  //     imgPath:
  //       'https://c.ndtvimg.com/2019-06/1m2a2or8_vitamin-c-rich-drinks_625x300_25_June_19.jpg',
  //     price: 4,
  //     name: 'Lassi lajwab',
  //   },
  //   {
  //     imgPath:
  //       'https://snacksandsips.com/wp-content/uploads/2018/08/02-Cherry-Lemonade.jpg',
  //     price: 5.5,
  //     name: 'Aam panna',
  //   },
  //   {
  //     imgPath:
  //       'https://pizzazzerie.com/wp-content/uploads/2015/07/cherry-lemonade-recipe-pizzazzerie.jpg',
  //     price: 6,
  //     name: 'Sikanji soda',
  //   },
  //   {
  //     imgPath:
  //       'https://www.fifteenspatulas.com/wp-content/uploads/2015/07/Refreshing-Summer-Drinks-Fifteen-Spatulas-1.jpg',
  //     price: 7,
  //     name: 'Shrabati sabab',
  //   },
  //   {
  //     imgPath:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSD-X5xnvAQXT_T59BU1_acOxlUo3A1TNW23V6Y7KaCPYWWLr5A',
  //     price: 3.5,
  //     name: 'Kokam shrabat',
  //   },
  // ];
  // viewProducts = [];

  // onCategoryTabChange(event) {
  //   console.log('sdfsdfsdf', event.detail.value);
  //   if (event.detail.value == 'PIZZA') {
  //     this.selectedCategory = event.target.value;
  //     this.viewProducts = this.pizzaProducts;
  //   } else if (event.detail.value == 'DRINKS') {
  //     this.selectedCategory = event.target.value;
  //     this.viewProducts = this.drinksProducts;
  //   }
  // }

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

  constructor(public itemService:ItemService, private router: Router) {}
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
