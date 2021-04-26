import { Component, OnInit, Output } from "@angular/core";
import { MenuTabComponent } from "../menu-tab/menu-tab.component";
import { ItemService } from "../service/item.service";
import { LocationService } from "../service/location.service";
import { RestaurantService } from "../service/restaurant.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(public itemService:ItemService, public locService:LocationService, public resService:RestaurantService) {}
  // name = "Angular 5";
  
  ngOnInit() {
    // this.getAllItems();
    this.getAllLocations();
    
    
  }

  selectOption(locations: String) {
    //getted from event
    console.log(locations);
    
  }
  getAllLocations() {
    this.locService.getLocations().subscribe((res: any) => {
      console.log(res);
      this.locService.locations = res;
    });
  }
  getAllRestaurantsByLocations(id) {
    this.resService.getAllRestaurantsByLocations(id).subscribe((res: any) => {
      console.log(res);
      this.resService.restaurants = res;
    });
  }

  // getAllItems() {
  //   this.itemService.getItems().subscribe((res: any) => {
  //     console.log(res);
  //     this.itemService.items = res;
  //   });
  // }
    getItemsByRestaurant(id) {
      this.resService.findItemsByRestaurant(id).subscribe((res: any) => {
        console.log(res);
        this.itemService.items = res;
        console.log(this.itemService.items);
        localStorage.setItem('Storeitems', JSON.stringify(id));
        // console.log(JSON.parse(sessionStorage.getItem('Storeitems')));
      });
  }
  selectChangeHandler (event: number) {
    console.log(event);
    this.getItemsByRestaurant(event)
  }
  onChange(deviceValue) {
    console.log(deviceValue);
    this.getAllRestaurantsByLocations(deviceValue);
  }
}

