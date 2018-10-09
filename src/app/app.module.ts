import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourierOverviewComponent } from './courier-overview/courier-overview.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AuthInterceptor } from './auth/auth-interceptor';
import { AccountComponent } from './account/account.component';
import { EnterOrderComponent } from './enter-order/enter-order.component';

@NgModule({
  declarations: [
    AppComponent,
    CourierOverviewComponent,
    AccountComponent,
    EnterOrderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
