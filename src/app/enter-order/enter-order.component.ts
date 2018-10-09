import { Component, OnInit } from '@angular/core';
import { notImplemented } from '@angular/core/src/render3/util';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-enter-order',
  templateUrl: './enter-order.component.html',
  styleUrls: ['./enter-order.component.css']
})
export class EnterOrderComponent implements OnInit {

  products: string[] = [];
  productName: string;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
  }

  addProduct() {
    this.products.push(this.productName);
  }

  removeProduct(index: number) {
    this.products.splice(index, 1);
  }

  placeOrder() {
    const id = +this.route.snapshot.paramMap.get('id');
    const order = {
      products: this.products,
      courierId: id,
    };
    this.http.post('/order', order).subscribe();
  }
}
