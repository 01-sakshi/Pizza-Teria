import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocationService {

  private data:any[] = [];

  public set locations(locations){
    this.data = locations;
  }
  public get locations(){
    return this.data;
  }
  public set location(location){
    this.data = location;
  }
  public get location(){
    return this.data;
  }

  private host:string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getLocations(){
    return this.http.get(`${this.host}/location`);
  }

  // findItemByCategory(id:number){
  //   return this.http.get(`${this.host}/items/cat/${id}`);
  // }
}
