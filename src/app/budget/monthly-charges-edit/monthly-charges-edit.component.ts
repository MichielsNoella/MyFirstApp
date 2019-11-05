import {Component, Input, OnInit} from '@angular/core';
import {Budget} from '../budget.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StaticDataSource} from '../static.datasource';

@Component({
  selector: 'app-monthly-charges-edit',
  templateUrl: './monthly-charges-edit.component.html',
  styleUrls: ['./monthly-charges-edit.component.css']
})
export class MonthlyChargesEditComponent implements OnInit {

  @Input() monthlyCharges: Budget;

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
  }

  onSubmit() {
    if (this.changeForm.invalid) {
      return;
    }
    this.service.changeMonthlyCharges(this.changeForm.value);
  }

  addFixedCharges(budget: Budget) {
    this.service.newFixedCharges(budget);
  }

  onDelete(id: string) {
    this.service.removeMonthlyCharges(id);
  }
}
