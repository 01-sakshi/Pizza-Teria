import { Component, OnInit } from '@angular/core';
import { ItemService } from '../service/item.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  constructor(public itemService:ItemService) { }

  ngOnInit(): void {
  }

}
