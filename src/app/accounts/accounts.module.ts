import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {AccountsComponent} from './accounts.component';
import {AccountsRoutingModule} from './accounts-routing.module';
import {StartToSaveNoellaEditComponent} from './start-to-save-noella-edit/start-to-save-noella-edit.component';

@NgModule({
  declarations: [AccountsComponent, StartToSaveNoellaEditComponent],
  imports: [
    AccountsRoutingModule,
    CommonModule,
    NgbModule,
    ReactiveFormsModule

  ]
})
export class AccountsModule {
}
