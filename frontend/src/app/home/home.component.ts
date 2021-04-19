import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor() {}
  name = "Angular 5";
  selectedCountry: any;
  restaurants = {};
  locations = [
    {
      id: 1,
      name: "Hyderabad-jubilee hills",
      restaurants: ["dominos1", "pizzahouse", "pizzahut"],
    },
    {
      id: 2,
      name: "Hyderabad-Panjagutta",
      restaurants: ["dominos2", "pizzahouse", "pizzahut"],
    },
    {
      id: 3,
      name: "Banglore-Whitefield",
      restaurants: ["dominos3", "pizzahouse", "pizzahut"],
    },
    {
      id: 4,
      name: "Banglore-Manyata",
      restaurants: ["dominos4", "pizzahouse", "pizzahut"],
    },
    {
      id: 5,
      name: "Delhi-Redfort",
      restaurants: ["dominos5", "pizzahouse", "pizzahut"],
    },
    {
      id: 6,
      name: "Delhi-Rajbhavan",
      restaurants: ["dominos6", "pizzahouse", "pizzahut"],
    },
  ];
  ngOnInit() {
    this.restaurants = this.locations.filter((x) => x.id == 1)[0].restaurants;
  }
  onChange(deviceValue) {
    this.restaurants = this.locations.filter(
      (x) => x.id == deviceValue
    )[0].restaurants;
  }
}
