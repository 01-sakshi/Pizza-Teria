import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PizzaSizeService {
  private data: any[] = [];

  public set sizes(sizes) {
    this.data = sizes;
  }
  public get sizes() {
    return this.data;
  }
  public set size(size) {
    this.data = size;
  }
  public get size() {
    return this.data;
  }

  private host: string = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  getSizes() {
    return this.http.get(`${this.host}/sizes`);
  }
  findSizeById(id) {
    return this.http.get(`${this.host}/sizes/${id}`);
  }
  saveSize(size) {
    return this.http.post(`${this.host}/sizes`, size);
  }
}
