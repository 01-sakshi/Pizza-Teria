import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../app.component";

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
    role: null,
  };

  constructor(private router: Router) {}
  // user: User = AppComponent.modelUser;

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
  }
}
