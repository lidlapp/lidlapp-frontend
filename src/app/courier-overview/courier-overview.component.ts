import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Courier } from '../../models/Courier';

@Component({
  selector: 'app-courier-overview',
  templateUrl: './courier-overview.component.html',
  styleUrls: ['./courier-overview.component.css']
})
export class CourierOverviewComponent implements OnInit {

  couriers: Observable<Courier[]>;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.couriers = timer(0, 5000).pipe(
      switchMap(_ => this.httpClient.get<Courier[]>('/courier'))
    );
  }
}
