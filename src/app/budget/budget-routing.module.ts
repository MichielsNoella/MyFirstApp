import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingPageComponent} from './shopping-page/shopping-page.component';
import {VisaDannyPageComponent} from './visa-danny-page/visa-danny-page.component';
import {VisaNoellaPageComponent} from './visa-noella-page/visa-noella-page.component';
import {AuthGuard} from '../auth/auth.guard';
import {FixedChargesComponent} from './fixed-charges/fixed-charges.component';
import {MonthlyChargesComponent} from './monthly-charges/monthly-charges.component';
import {RevenuesComponent} from './revenues/revenues.component';

const routes: Routes = [
  {path: 'shopping', component: ShoppingPageComponent, canActivate: [AuthGuard]},
  {path: 'visaDanny', component: VisaDannyPageComponent, canActivate: [AuthGuard]},
  {path: 'visaNoella', component: VisaNoellaPageComponent, canActivate: [AuthGuard]},
  {path: 'fixedCharges', component: FixedChargesComponent, canActivate: [AuthGuard]},
  {path: 'monthlyCharges', component: MonthlyChargesComponent, canActivate: [AuthGuard]},
  {path: 'revenues', component: RevenuesComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class BudgetRoutingModule {
}
