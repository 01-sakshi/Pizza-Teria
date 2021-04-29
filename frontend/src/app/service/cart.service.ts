import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
  export class CartService {

    private data:any[] = [];

    public set orders(orders){
      this.data = orders;
    }
    public get orders(){
      return this.data;
    }
    public set order(order){
      this.data = order;
    }
    public get order(){
      return this.data;
    }
    body:any;
    private host:string = "http://localhost:8080";
  
    constructor(private http: HttpClient) { }
  
    findOrdersByUser(username){
      return this.http.get(`${this.host}/order/${username}`);
    }

    CreateOrder(username,rid,itemid,quantity,size,toppings,price){
      // alert("in order service");
      return this.http.post<any>(`${this.host}/order/${username}/${rid}/${itemid}/${quantity}/${size}/${toppings}/${price}`,this.body).subscribe((res: any) => {
        console.log(res);
      // this.itemService.items = res;
    });
    }
  }