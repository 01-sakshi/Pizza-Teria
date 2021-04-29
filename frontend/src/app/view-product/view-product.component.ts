import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { ItemService } from "../service/item.service";
import { PizzaSizeService } from "../service/pizza-size.service";
import { PizzaToppingService } from "../service/pizza-topping.service";
import { CartService } from '../service/cart.service';
// import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { RestaurantService } from "../service/restaurant.service";

@Component({
  selector: "app-view-product",
  templateUrl: "./view-product.component.html",
  styleUrls: ["./view-product.component.css"],
})

export class ViewProductComponent implements OnInit {
  flag:boolean=false;
  count:number=1;
  OrderValue:any[];
  public array:any[]=[];
 
  constructor(
    public itemService: ItemService,
    public pizzaSizeService: PizzaSizeService,
    public pizzaToppingService: PizzaToppingService,
    private router: Router,
    private cartService: CartService,
    private activatedRoute: ActivatedRoute,
    public resService:RestaurantService
  ) {
    this.array=this.OrderValue
  }
  public toppings:String="";
  public price:number=0;
  public size:number=0;
  public Toppings:String;
  public aggregator = [];
  public ResId:number=JSON.parse(localStorage.getItem('Storeitems'));

  addToCart() {
    this.createOrder();
    return this.resService.findItemsByRestaurant(this.ResId);
  }

  Menu(){
    return this.resService.findItemsByRestaurant(this.ResId);
  }

  onSizeChange(value){
          console.log(value.id);
          this.price=this.price+value.price;
          console.log(this.price);
          this.size=value.id;
  }

  onToppingsChange(value){
    this.count=this.count+1;
    if(this.count!=0){
      this.toppings=this.toppings+","+value.topping;
      this.price=this.price+value.price;
      console.log(this.price);
    }
    console.log(value.topping);
    console.log(this.count);
    this.Toppings=this.toppings;
}

  ngOnInit(): void {
    this.getAllSizes();
    this.getAllToppings();
    console.log(this.toppings);
    this.activatedRoute.params.subscribe((params: Params) => {
      let date = params['startdate'];
        console.log(date);
      });
      this.router.navigate(["./../menu-tab"]);  
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

  createOrder() {
    const resultArray = Object.keys(this.itemService.item).map(index => {
      let pizza = this.itemService.item[index];
      return pizza;
  });
    console.log(resultArray);
    console.log(resultArray[0]);
    console.log(JSON.parse(sessionStorage.getItem("userData")));
    console.log(JSON.parse(localStorage.getItem("Storeitems")));
    const resultUser = Object.keys(JSON.parse(sessionStorage.getItem("userData"))).map(index => {
      let useraa = JSON.parse(sessionStorage.getItem("userData"))[index];
      return useraa;
  });
  console.log(this.price);
  console.log(resultArray[6]);
  this.price=this.price+resultArray[6];
  console.log(this.price);
  console.log(this.size);
  console.log(this.toppings);
  var test = JSON.parse(localStorage.getItem("order"));
  if(test!=null){
  this.OrderValue=test.concat([resultUser[0],JSON.parse(localStorage.getItem("Storeitems")),resultArray,1,this.size,this.Toppings,this.price]);
  }
  else{
    this.OrderValue=[resultUser[0],JSON.parse(localStorage.getItem("Storeitems")),resultArray,1,this.size,this.Toppings,this.price];
  }
  console.log(this.OrderValue);
  this.cartService.CreateOrder(resultUser[0],JSON.parse(localStorage.getItem("Storeitems")),resultArray[0],1,this.size,this.Toppings,this.price);
  console.log(resultUser[0]);
    window.alert('Your product has been added to the cart! Item Total is Rs.'+this.price);
    localStorage.setItem("order", JSON.stringify(this.OrderValue));
    console.log(this.OrderValue);
  }
}