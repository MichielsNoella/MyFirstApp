import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../auth/auth.guard';
import {StartToSaveNoellaComponent} from './start-to-save-noella/start-to-save-noella.component';

const routes: Routes = [
  {path: 'startToSaveNoella', component: StartToSaveNoellaComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})

export class AccountsRoutingModule {
}
