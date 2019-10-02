import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'shopping',
    loadChildren: './shopping/shopping.module#ShoppingModule'
  },
  {path: '**', redirectTo: '/shopping/list'}

  // {path: 'list', component: ShoppingListComponent},
  // {path: 'add', component: ShoppingAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
