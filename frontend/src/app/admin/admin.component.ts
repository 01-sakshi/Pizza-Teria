import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {AdminTasksComponent} from './../admin-tasks/admin-tasks.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  

  constructor(private router: Router) { }

  ngOnInit() {
    // console.log(this.username);
  }
//  username:string;
//  password:string;
//  console.log(this.username);

validate(username:String,password:String){
  if(username==="admin@gmail.com"&& password==="admin")
  {
    console.log('hello');
    this.router.navigate(["./../admin-tasks"]);
  }


}
}
