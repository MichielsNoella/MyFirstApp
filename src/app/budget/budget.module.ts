import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BudgetListComponent} from './budget-list/budget-list.component';
import {BudgetAddComponent} from './budget-add/budget-add.component';
import {BudgetRoutingModule} from './budget-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DatePickerModule} from '@syncfusion/ej2-angular-calendars';
import {ShoppingPageComponent} from './shopping-page/shopping-page.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {VisaDannyPageComponent} from './visa-danny-page/visa-danny-page.component';
import {VisaNoellaPageComponent} from './visa-noella-page/visa-noella-page.component';
import {FixedChargesComponent} from './fixed-charges/fixed-charges.component';
import {MonthlyChargesComponent} from './monthly-charges/monthly-charges.component';
import {MonthlyRevenuesComponent} from './monthly-revenues/monthly-revenues.component';
import {RevenuesComponent} from './revenues/revenues.component';
import {MonthlyChargesEditComponent} from './monthly-charges-edit/monthly-charges-edit.component';
import {MonthlyRevenuesEditComponent} from './monthly-revenues-edit/monthly-revenues-edit.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [BudgetListComponent, BudgetAddComponent, ShoppingPageComponent, VisaDannyPageComponent, VisaNoellaPageComponent,
    FixedChargesComponent, MonthlyChargesComponent, MonthlyRevenuesComponent, RevenuesComponent, MonthlyChargesEditComponent, MonthlyRevenuesEditComponent],
  imports: [
    CommonModule,
    BudgetRoutingModule,
    FormsModule,
    DatePickerModule,
    ReactiveFormsModule, NgbModule, NgxPaginationModule
  ],
  exports: [
    BudgetListComponent, BudgetAddComponent
  ]
})
export class BudgetModule {
}
