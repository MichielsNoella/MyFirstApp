import {Component, Input, OnInit} from '@angular/core';
import {Account} from '../accounts.model';
import {Subject} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StaticDataSource} from '../static.datasource';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-accounts-modify',
  templateUrl: './accounts-modify.component.html',
  styleUrls: ['./accounts-modify.component.css']
})
export class AccountsModifyComponent implements OnInit {

  @Input() account: Account;

  private success = new Subject<string>();

  staticAlertClosed = false;
  successMessage: string;

  changeForm: FormGroup;

  get f() {
    return this.changeForm.controls;
  }

  constructor(private service: StaticDataSource) {
  }

  ngOnInit() {
    this.changeForm = new FormGroup({
      amount: new FormControl(this.account.amount, [Validators.required, Validators.required, Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]),
      genre: new FormControl(this.account.genre),
      id: new FormControl(this.account.id)
    });

    setTimeout(() => this.staticAlertClosed = true, 20000);

    this.success.subscribe((message) => this.successMessage = message);
    this.success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);
  }

  onSubmit() {
    if (this.changeForm.invalid) {
      return;
    }
    this.service.modifyAccount(this.changeForm.value);
    this.success.next(`Bedrag gewijzigd`);
  }

}
