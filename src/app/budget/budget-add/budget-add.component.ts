import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {StaticDataSource} from '../static.datasource';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Budget, Genre} from '../budget.model';

@Component({
  selector: 'app-budget-add',
  templateUrl: './budget-add.component.html',
  styleUrls: ['./budget-add.component.css']
})
export class BudgetAddComponent implements OnInit {

  @Output() add: EventEmitter<Budget> = new EventEmitter<Budget>();

  budgetForm = new FormGroup({
    description: new FormControl('', Validators.required),
    amount: new FormControl('', [Validators.required, Validators.required, Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]),
    budgetDate: new FormControl('', Validators.required)
  });

  get f() {
    return this.budgetForm.controls;
  }

  constructor(
    private service: StaticDataSource
  ) {
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.budgetForm.invalid) {
      return;
    }

    const d = this.budgetForm.controls.budgetDate.value;
    this.budgetForm.controls.budgetDate.setValue(d.year + '-' + d.month + '-' + d.day);
    this.add.emit(this.budgetForm.value);

    this.budgetForm.reset();
  }

  getDirection() {
    return Object.values(Genre);
  }
}
