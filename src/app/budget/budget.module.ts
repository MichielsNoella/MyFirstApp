import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BudgetListComponent} from './budget-list/budget-list.component';
import {BudgetAddComponent} from './budget-add/budget-add.component';
import {BudgetRoutingModule} from './budget-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DatePickerModule} from '@syncfusion/ej2-angular-calendars';
import {ShoppingPageComponent} from './shopping-page/shopping-page.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {VisaPageComponent} from './visa-page/visa-page.component';

@NgModule({
  declarations: [BudgetListComponent, BudgetAddComponent, ShoppingPageComponent, VisaPageComponent],
  imports: [
    CommonModule,
    BudgetRoutingModule,
    FormsModule,
    DatePickerModule,
    ReactiveFormsModule, NgbModule
  ],
  exports: [
    BudgetListComponent, BudgetAddComponent
  ]
})
export class BudgetModule {
}
