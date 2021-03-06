import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppComponent, User } from "../app.component";
import { CartService } from "../service/cart.service";

@Component({
  selector: "app-restaurants",
  templateUrl: "./restaurants.component.html",
  styleUrls: ["./restaurants.component.css"],
})
export class RestaurantsComponent implements OnInit {
  modelUser: User = {
    username: "",
    password: "",
    email: "",
    phone: "",
    firstname: "",
    lastname: "",
    address: "",
  };

  constructor(private router: Router,private cartService: CartService) {}
  user: User = AppComponent.modelUser;
  flag:Boolean=false;

  ngOnInit() {
    if (sessionStorage.getItem("userData") == null) {
      this.router.navigate(["login"]);
    }
    let userData = JSON.parse(sessionStorage.getItem("userData"));
    console.log(userData);
    Object.assign(this.modelUser, userData);
  }
  clearLocal() {
    sessionStorage.clear();
    localStorage.clear();
  }
}
