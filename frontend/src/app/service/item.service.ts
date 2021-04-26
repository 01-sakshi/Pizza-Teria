import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private data:any[] = [];

  public set items(items){
    this.data = items;
  }
  public get items(){
    return this.data;
  }
  public set item(item){
    this.data = item;
  }
  public get item(){
    return this.data;
  }

  private host:string = "http://localhost:8080";

  constructor(private http: HttpClient) { }
  getItems(){
    return this.http.get(`${this.host}/items`);
  }
  findItemById(id){
    return this.http.get(`${this.host}/items/${id}`);
  }
  findItemByCategory(id){
    return this.http.get(`${this.host}/items/cat/${id}`);
  }
  saveItem(item){
    return this.http.post(`${this.host}/items`, item);
  }
}
