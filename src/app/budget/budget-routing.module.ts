import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingPageComponent} from './shopping-page/shopping-page.component';
import {VisaPageComponent} from './visa-page/visa-page.component';

const routes: Routes = [
  {path: 'shopping', component: ShoppingPageComponent},
  {path: 'visa', component: VisaPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetRoutingModule {
}
