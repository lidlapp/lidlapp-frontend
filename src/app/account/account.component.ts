import { Component, OnInit } from '@angular/core';
import { Account } from '../../models/Account';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  model: Account = new Account();

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Account>('/account').pipe(
      retry(3),
    ).subscribe(a => this.model = a);
  }

  onSubmit() {
    console.log('submit', this.model);
    this.http.put<Account>('/account', this.model)
      .subscribe(a => this.model = a);
  }
}
