import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingAddComponent } from './shopping-add/shopping-add.component';
import {ShoppingRoutingModule} from './shopping-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DatePickerModule} from '@syncfusion/ej2-angular-calendars';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingAddComponent, ShoppingPageComponent],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    FormsModule,
    DatePickerModule,
    ReactiveFormsModule
  ],
  exports: [
    ShoppingListComponent, ShoppingAddComponent
  ]
})
export class ShoppingModule { }
