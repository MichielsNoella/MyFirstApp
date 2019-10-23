import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingPageComponent} from './shopping-page/shopping-page.component';
import {VisaDannyPageComponent} from './visa-danny-page/visa-danny-page.component';
import {VisaNoellaPageComponent} from './visa-noella-page/visa-noella-page.component';

const routes: Routes = [
  {path: 'shopping', component: ShoppingPageComponent},
  {path: 'visaDanny', component: VisaDannyPageComponent},
  {path: 'visaNoella', component: VisaNoellaPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetRoutingModule {
}
