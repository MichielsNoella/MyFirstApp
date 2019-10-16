import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BudgetListComponent} from './shopping-list/budget-list.component';
import {BudgetAddComponent} from './shopping-add/budget-add.component';
import {ShoppingRoutingModule} from './shopping-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DatePickerModule} from '@syncfusion/ej2-angular-calendars';
import {ShoppingPageComponent} from './shopping-page/shopping-page.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [BudgetListComponent, BudgetAddComponent, ShoppingPageComponent],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    FormsModule,
    DatePickerModule,
    ReactiveFormsModule, NgbModule
  ],
  exports: [
    BudgetListComponent, BudgetAddComponent
  ]
})
export class ShoppingModule {
}
