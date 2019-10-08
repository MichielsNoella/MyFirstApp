import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingAddComponent } from './shopping-add/shopping-add.component';
import {ShoppingRoutingModule} from './shopping-routing.module';
import {FormsModule} from '@angular/forms';
import {DatePickerModule} from '@syncfusion/ej2-angular-calendars';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingAddComponent],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    FormsModule,
    DatePickerModule
  ],
  exports: [
    ShoppingListComponent, ShoppingAddComponent
  ]
})
export class ShoppingModule { }
