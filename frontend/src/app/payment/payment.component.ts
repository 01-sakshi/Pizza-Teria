import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
 
  cod:boolean=false;
  card:boolean=false;
  // flag:boolean=false;
  constructor(private router: Router,) { }

  ngOnInit() {
    localStorage.clear();
  }
Success(){
  // if(this.flag){
  alert("Order Placed Successfully!");
  this.router.navigate(['/home']);
}
  codPay(){
    this.card=false;
this.cod=!this.cod;
  }
  cardPay(){
    this.cod=false;
    this.card=!this.card;
  }
  clearLocal() {
    localStorage.clear();
  }
}
