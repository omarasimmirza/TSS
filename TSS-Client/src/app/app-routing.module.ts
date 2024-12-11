import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WRSTicketsComponent } from './wrs-tickets/wrs-tickets.component'
import { UrbpsTicketsComponent } from './urbps-tickets/urbps-tickets.component'
import { VendorTicketsComponent } from './vendor-tickets/vendor-tickets.component'
import { AllTicketsComponent } from './all-tickets/all-tickets.component'

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'wrsTickets', component:  WRSTicketsComponent},
  {path: 'urbpsTickets', component:  UrbpsTicketsComponent},
  {path: 'vendorTickets', component:  VendorTicketsComponent},
  {path: 'allTickets', component:  AllTicketsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
