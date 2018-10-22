import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { OrderItem } from '../../models/OrderItem';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, filter, tap } from 'rxjs/operators';
import { Courier } from 'src/models/Courier';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-order-requests',
  templateUrl: './order-requests.component.html',
  styleUrls: ['./order-requests.component.css']
})
export class OrderRequestsComponent implements OnInit {

  couriers: Observable<Courier[]>;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private auth: OAuthService,
  ) { }

  ngOnInit() {
    const userId = this.auth.getIdentityClaims()['sub'];
    this.couriers = timer(0, 5000).pipe(
      switchMap(_ => this.httpClient.get<Courier[]>('/courier')),
      map(d => d
        .filter(c => c.user.id === userId)
        .map(c => ({
        ...c,
        orderItems: c.orderItems
          .sort((a, b) => a.id - b.id)
      }))),
    );
  }

  chooseCourier(courier: Courier) {
    this.router.navigate(['enter-order', courier.id]);
  }
}
