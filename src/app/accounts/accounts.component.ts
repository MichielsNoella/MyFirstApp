import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {StaticDataSource} from './static.datasource';
import {Account, Genre, Sum} from './accounts.model';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  sum$: Observable<Sum>;
  startToSaveNoella: Account[];
  startToSaveDanny: Account[];
  startToSave: Account[];
  savingAccount: Account[];
  account: Account;

  constructor(private service: StaticDataSource, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.sum$ = this.service.getTotalList().pipe(
      map(order => order.reduce((total, account) => {
        if (account.genre === Genre.START_TO_SAVE_NOELLA) {
          total.startToSaveNoella = +total.startToSaveNoella + +account.amount;
        } else if (account.genre === Genre.START_TO_SAVE_DANNY) {
          total.startToSaveDanny = +total.startToSaveDanny + +account.amount;
        } else if (account.genre === Genre.START_TO_SAVE) {
          total.startToSave = +total.startToSave + +account.amount;
        } else if (account.genre === Genre.SAVING_ACCOUNT) {
          total.savingAccount = +total.savingAccount + +account.amount;
        }

        total.total = +total.total + +account.amount;

        return total;
      }, new Sum()))
    );

    this.service.getStartToSaveNoellaList().subscribe(account => {
      this.startToSaveNoella = account;
    });

    this.service.getStartToSaveDannyList().subscribe(account => {
      this.startToSaveDanny = account;
    });

    this.service.getStartToSaveList().subscribe(account => {
      this.startToSave = account;
    });

    this.service.getSavingAccountList().subscribe(account => {
      this.savingAccount = account;
    });
  }

  modifyAccount($event) {
    this.service.modifyAccount($event);
  }

  /* Sign out */
  signOut() {
    this.authService.signOut();
    this.router.navigate(['admin/login']);
  }

}
