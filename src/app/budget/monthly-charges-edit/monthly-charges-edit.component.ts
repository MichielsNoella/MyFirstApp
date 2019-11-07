import {Component, Input, OnInit} from '@angular/core';
import {Budget} from '../budget.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StaticDataSource} from '../static.datasource';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-monthly-charges-edit',
  templateUrl: './monthly-charges-edit.component.html',
  styleUrls: ['./monthly-charges-edit.component.css']
})
export class MonthlyChargesEditComponent implements OnInit {

  @Input() monthlyCharges: Budget;

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
      description: new FormControl(this.monthlyCharges.description, Validators.required),
      amount: new FormControl(this.monthlyCharges.amount, [Validators.required, Validators.required, Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]),
      genre: new FormControl(this.monthlyCharges.genre),
      extraComment: new FormControl(this.monthlyCharges.extraComment),
      id: new FormControl(this.monthlyCharges.id)
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
    this.service.changeMonthlyCharges(this.changeForm.value);
    this.success.next('Wijziging gedaan');
  }

  addFixedCharges(budget: Budget) {
    this.service.newFixedCharges(budget);
    this.success.next(`Bedrag toegevoegd`);
  }

  onDelete(id: string) {
    this.service.removeMonthlyCharges(id);
  }

}
