import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingAddComponent } from './shopping-add/shopping-add.component';
import {ShoppingRoutingModule} from './shopping-routing.module';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingAddComponent],
  imports: [
    CommonModule,
    ShoppingRoutingModule
  ],
  exports: [
    ShoppingListComponent, ShoppingAddComponent
  ]
})
export class ShoppingModule { }
