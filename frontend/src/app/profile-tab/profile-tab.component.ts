import { Component, OnInit } from '@angular/core';
import {UserService} from './../service/user.service'
import { User } from '../app.component';
@Component({
  selector: 'app-profile-tab',
  templateUrl: './profile-tab.component.html',
  styleUrls: ['./profile-tab.component.css']
})
export class ProfileTabComponent implements OnInit {
  user: User = {} as User;
  
  constructor(private userService: UserService) { }
  ngOnInit(): void { 
  }
  updateUser(username) {
    
    this.userService.updateUser( username,this.user);     
      
  }
}
