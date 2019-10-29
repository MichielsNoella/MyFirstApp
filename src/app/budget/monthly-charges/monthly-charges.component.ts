import {Component, Input, OnInit} from '@angular/core';
import {Budget, Genre} from '../budget.model';
import {StaticDataSource} from '../static.datasource';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-monthly-charges',
  templateUrl: './monthly-charges.component.html',
  styleUrls: ['./monthly-charges.component.css']
})
export class MonthlyChargesComponent implements OnInit {

  monthlyCharges: Budget[];

  monthlyForm = new FormGroup({
    description: new FormControl('', Validators.required),
    amount: new FormControl('', [Validators.required, Validators.required, Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]),
    budgetDate: new FormControl(undefined),
    genre: new FormControl(Genre.MONTHLY_CHARGES),
    extraComment: new FormControl('')
  });

  get f() {
    return this.monthlyForm.controls;
  }

  constructor(
    private service: StaticDataSource
  ) {
  }

  ngOnInit() {
    this.service.getMonthlyChargesList().subscribe(budgets => {
      this.monthlyCharges = budgets;
    });
  }

  onSubmit() {
    if (this.monthlyForm.invalid) {
      return;
    }

    if (this.monthlyForm.controls.budgetDate.value !== null) {
      const d = this.monthlyForm.controls.budgetDate.value;
      this.monthlyForm.controls.budgetDate.setValue(d.year + '-' + d.month + '-' + d.day);
    }
    this.service.addMonthlyCharges(this.monthlyForm.value);

    this.monthlyForm.reset();
  }

  getDirection() {
    return Object.values(Genre);
  }

  onDelete(id: string) {
    this.service.removeMonthlyCharges(id);
  }
}
