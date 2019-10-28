import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingPageComponent} from './shopping-page/shopping-page.component';
import {VisaDannyPageComponent} from './visa-danny-page/visa-danny-page.component';
import {VisaNoellaPageComponent} from './visa-noella-page/visa-noella-page.component';
import {AuthGuard} from '../auth/auth.guard';
import {FixedChargesComponent} from './fixed-charges/fixed-charges.component';

const routes: Routes = [
  {path: 'shopping', component: ShoppingPageComponent, canActivate: [AuthGuard]},
  {path: 'visaDanny', component: VisaDannyPageComponent, canActivate: [AuthGuard]},
  {path: 'visaNoella', component: VisaNoellaPageComponent, canActivate: [AuthGuard]},
  {path: 'fixedCharges', component: FixedChargesComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class BudgetRoutingModule {
}
