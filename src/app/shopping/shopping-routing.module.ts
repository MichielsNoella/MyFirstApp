import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingAddComponent} from './shopping-add/shopping-add.component';
import {ShoppingPageComponent} from './shopping-page/shopping-page.component';

const routes: Routes = [
  {path: 'page', component: ShoppingPageComponent},
  {path: 'add', component: ShoppingAddComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule {
}
