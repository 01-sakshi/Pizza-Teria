import { Component, OnInit } from '@angular/core';
import { AddItemComponent} from './../add-item/add-item.component';
import { AddLocationComponent} from './../add-location/add-location.component';
import { AddRestaurantComponent} from './../add-restaurant/add-restaurant.component';

@Component({
  selector: 'app-admin-tasks',
  templateUrl: './admin-tasks.component.html',
  styleUrls: ['./admin-tasks.component.css']
})
export class AdminTasksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
