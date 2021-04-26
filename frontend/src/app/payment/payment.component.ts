import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
 
  cod:boolean=false;
  card:boolean=false;
  // flag:boolean=false;
  constructor() { }

  ngOnInit() {
    localStorage.clear();
  }
Success(){
  // if(this.flag){
  alert("Order Placed Successfully!");
  // }
  // else
  // alert("Order Not Placed");
}
  codPay(){
    this.card=false;
this.cod=!this.cod;
  }
  cardPay(){
    this.cod=false;
    this.card=!this.card;
  }
}
