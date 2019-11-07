import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BudgetModule} from '../budget/budget.module';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {OtherModule} from '../other/other.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    OtherModule,
    HomeRoutingModule,
    CommonModule,
    BudgetModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class HomeModule {
}
