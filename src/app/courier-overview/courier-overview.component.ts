import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Courier } from '../../models/Courier';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courier-overview',
  templateUrl: './courier-overview.component.html',
  styleUrls: ['./courier-overview.component.css']
})
export class CourierOverviewComponent implements OnInit {

  couriers: Observable<Courier[]>;

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
    this.couriers = timer(0, 5000).pipe(
      switchMap(_ => this.httpClient.get<Courier[]>('/courier'))
    );
  }

  chooseCourier(courier: Courier) {
    this.router.navigate(['enter-order', courier.id]);
  }
}
