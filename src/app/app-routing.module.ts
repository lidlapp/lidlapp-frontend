import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { CourierOverviewComponent } from './courier-overview/courier-overview.component';
import { EnterOrderComponent } from './enter-order/enter-order.component';
import { CourierSignupComponent } from './courier-signup/courier-signup.component';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: CourierOverviewComponent },
  { path: 'account', component: AccountComponent },
  { path: 'enter-order/:id', component: EnterOrderComponent},
  { path: 'courier-signup', component: CourierSignupComponent}
  // { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
