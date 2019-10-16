import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'shopping',
    loadChildren: './budget/shopping.module#ShoppingModule'
  },
  {path: '**', redirectTo: '/shopping/page'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
