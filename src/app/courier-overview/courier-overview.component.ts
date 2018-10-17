import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { Courier } from '../../models/Courier';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-courier-overview',
  templateUrl: './courier-overview.component.html',
  styleUrls: ['./courier-overview.component.css']
})
export class CourierOverviewComponent implements OnInit {

  couriers: Observable<Courier[]>;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private auth: OAuthService,
  ) { }

  ngOnInit() {
    this.couriers = timer(0, 5000).pipe(
      switchMap(_ => this.httpClient.get<Courier[]>('/courier')),
      map(d => d.map(c => ({
        ...c,
        orderItems: c.orderItems
          .filter(i => i.consumerId === this.consumerId)
          .sort((a, b) => a.id - b.id)
      }))),
    );
  }

  chooseCourier(courier: Courier) {
    this.router.navigate(['enter-order', courier.id]);
  }

  get consumerId() {
    return this.auth.getIdentityClaims()['sub'];
  }
}
