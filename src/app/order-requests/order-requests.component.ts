import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { OrderItem } from '../../models/OrderItem';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-order-requests',
  templateUrl: './order-requests.component.html',
  styleUrls: ['./order-requests.component.css']
})
export class OrderRequestsComponent implements OnInit {

  orderItems: Observable<OrderItem[]>;

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
    this.orderItems = timer(0, 5000).pipe(
      switchMap(_ => this.httpClient.get<OrderItem[]>('/order'))
    );
  }

}
