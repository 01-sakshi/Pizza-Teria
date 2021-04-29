import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AppComponent} from './../app.component';
import {Location } from './../model/Location';
@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {
  

  constructor(private http:HttpClient,private router:Router ) { }
  
  location: Location = {} as Location;
  flag:boolean=false;

 
   
  ngOnInit() {
  }
   
  private  host:string="http://localhost:8080/api/addLocation";
  
  addLocation(location_id:number,location_name:string):void{
    
    this.location.name=location_name;
    this.location.id=location_id;
    console.log(location);
  



this.http.post<Location>(this.host,this.location).subscribe(
  
  
  (res) => {
    this.flag=true;
    return this.http.post<Location>(`${this.host}`,this.location);
    
  },
  (err) => {
    
    alert("An error has occurred while adding the location");
    this.flag=false;
    console.log(this.location);
  }
);
if(this.flag)
window.alert('location was added successfully');



  }

}
