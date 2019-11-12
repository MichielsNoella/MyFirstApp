import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OtherComponent} from './other.component';
import {OtherRoutingModule} from './other-routing.module';
import {AccountsModule} from '../accounts/accounts.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import { StartToSaveNoellaEditComponent } from './start-to-save-noella-edit/start-to-save-noella-edit.component';

@NgModule({
  declarations: [OtherComponent, StartToSaveNoellaEditComponent],
  imports: [
    OtherRoutingModule,
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    AccountsModule
  ]
})
export class OtherModule {
}
