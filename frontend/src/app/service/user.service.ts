
import { User } from './../app.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
  })
  export class UserService{

    private data:any[]=[];
    public flag:boolean=false;
    
    
    constructor(private http:HttpClient){}
    private host:string = "http://localhost:8080";
   Success(){
    this.flag=true;
     window.alert('updated details successfully');
     
   } 
    updateUser(username: String,user:User) {

      this.http.put<User>(this.host+'/api/editUser/'+username, user).subscribe(
        (res) => {
    return this.http.put<User>(`${this.host}/api/editUser/${username}`, user);
  },
  (err) => {
    console.log([username]);
    alert("An error has occurred while logging in");
    this.flag=false;
  });
  if(this.flag)
{
  this.Success();
}
    
}
  }
