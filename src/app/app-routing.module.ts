import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'budget',
    loadChildren: './budget/budget.module#BudgetModule'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {path: '**', redirectTo: '/home/home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
