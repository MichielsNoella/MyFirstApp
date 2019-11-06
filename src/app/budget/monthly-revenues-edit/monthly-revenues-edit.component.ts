import {Component, Input, OnInit} from '@angular/core';
import {Budget} from '../budget.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StaticDataSource} from '../static.datasource';

@Component({
  selector: 'app-monthly-revenues-edit',
  templateUrl: './monthly-revenues-edit.component.html',
  styleUrls: ['./monthly-revenues-edit.component.css']
})
export class MonthlyRevenuesEditComponent implements OnInit {

  @Input() monthlyRevenues: Budget;

  changeForm: FormGroup;

  get f() {
    return this.changeForm.controls;
  }

  constructor(private service: StaticDataSource) {
  }

  ngOnInit() {
    this.changeForm = new FormGroup({
      description: new FormControl(this.monthlyRevenues.description, Validators.required),
      amount: new FormControl(this.monthlyRevenues.amount, [Validators.required, Validators.required, Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]),
      genre: new FormControl(this.monthlyRevenues.genre),
      extraComment: new FormControl(this.monthlyRevenues.extraComment),
      id: new FormControl(this.monthlyRevenues.id)
    });
  }

  onSubmit() {
    if (this.changeForm.invalid) {
      return;
    }
    this.service.changeMonthlyRevenues(this.changeForm.value);
  }

  addMonthlyRevenues(budget: Budget) {
    this.service.newMonthlyRevenues(budget);
  }

  onDelete(id: string) {
    this.service.removeMonthlyRevenues(id);
  }

  newMonthlyRevenues(monthlyRevenues: Budget) {
    this.service.newMonthlyRevenues(monthlyRevenues);
  }
}
