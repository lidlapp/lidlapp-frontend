import { Component, OnInit } from '@angular/core';
import { Courier } from 'src/models/Courier';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courier-signup',
  templateUrl: './courier-signup.component.html',
  styleUrls: ['./courier-signup.component.css']
})
export class CourierSignupComponent implements OnInit {

  courier = new Courier();

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  async signupCourier() {
    const courier = this.courier;
    this.courier = new Courier();
    const [h, m] = courier.eta.split(':');
    const today = new Date();
    today.setHours(+h, +m);
    courier.eta = today.toJSON();
    console.log(courier);
    await this.http.post('/courier', courier).toPromise();
    this.router.navigate(['dashboard']);
  }
}
