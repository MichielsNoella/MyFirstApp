import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingAddComponent} from './shopping-add/shopping-add.component';

const routes: Routes = [
  {path: 'list', component: ShoppingListComponent},
  {path: 'add', component: ShoppingAddComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule {
}
