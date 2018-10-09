import { Component, OnInit } from '@angular/core';
import { notImplemented } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-enter-order',
  templateUrl: './enter-order.component.html',
  styleUrls: ['./enter-order.component.css']
})
export class EnterOrderComponent implements OnInit {

  products: string[] = [];
  productName: string;

  constructor() { }

  ngOnInit() {
  }

  addProduct() {
    this.products.push(this.productName);
  }

  removeProduct(index: number) {
    this.products.splice(index, 1);
  }

  placeOrder() {

  }
}
