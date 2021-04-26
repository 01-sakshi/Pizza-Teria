import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private data:any[] = [];

  public set categories(categories){
    this.data = categories;
  }
  public get categories(){
    return this.data;
  }
  public set category(category){
    this.data = category;
  }
  public get category(){
    return this.data;
  }

  private host:string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getCategory(){
    return this.http.get(`${this.host}/items/cate`);
  }

  findItemByCategoryAndRestaurant(id:number,rid:number){
    return this.http.get(`${this.host}/items/cat/${id}/${rid}`);
  }
}
