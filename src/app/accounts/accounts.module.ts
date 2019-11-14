import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {AccountsComponent} from './accounts.component';
import {AccountsRoutingModule} from './accounts-routing.module';
import {AccountsModifyComponent} from './accounts-modify/accounts-modify.component';

@NgModule({
  declarations: [AccountsComponent, AccountsModifyComponent],
  imports: [
    AccountsRoutingModule,
    CommonModule,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class AccountsModule {
}
