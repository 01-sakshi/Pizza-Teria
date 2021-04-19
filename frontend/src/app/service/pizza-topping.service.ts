import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PizzaToppingService {
  private data: any[] = [];

  public set toppings(toppings) {
    this.data = toppings;
  }
  public get toppings() {
    return this.data;
  }
  public set topping(topping) {
    this.data = topping;
  }
  public get topping() {
    return this.data;
  }

  private host: string = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  getToppings() {
    return this.http.get(`${this.host}/toppings`);
  }
  findToppingById(id) {
    return this.http.get(`${this.host}/toppings/${id}`);
  }
  saveTopping(topping) {
    return this.http.post(`${this.host}/toppings`, topping);
  }
}
