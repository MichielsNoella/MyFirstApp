import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StartToSaveNoellaComponent} from './start-to-save-noella/start-to-save-noella.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DatePickerModule} from '@syncfusion/ej2-angular-calendars';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AccountsRoutingModule} from './accounts-routing.module';

@NgModule({
  declarations: [StartToSaveNoellaComponent],
  imports: [
    CommonModule,
    FormsModule,
    DatePickerModule,
    ReactiveFormsModule, NgbModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule {
}
