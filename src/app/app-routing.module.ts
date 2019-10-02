import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'shopping',
    loadChildren: './shopping/shopping.module#ShoppingModule'
  },
  {path: '**', redirectTo: '/shopping/list'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
