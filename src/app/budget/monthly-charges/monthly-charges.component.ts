import {Component, OnInit} from '@angular/core';
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
  // @Output() add: EventEmitter<Budget> = new EventEmitter<Budget>();

  monthlyForm = new FormGroup({
    description: new FormControl('', Validators.required),
    amount: new FormControl('', [Validators.required, Validators.required, Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]),
    genre: new FormControl(Genre.MONTHLY_CHARGES),
    extraComment: new FormControl('')
  });
  changeForm = new FormGroup({
    description: new FormControl('', Validators.required),
    amount: new FormControl('', [Validators.required, Validators.required, Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]),
    genre: new FormControl(Genre.MONTHLY_CHARGES),
    extraComment: new FormControl(''),
    key: new FormControl('')
  });

  private budgets: string;

  get f() {
    return this.monthlyForm.controls;
  }

  constructor(
    private service: StaticDataSource) {
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
    this.service.addMonthlyCharges(this.monthlyForm.value);
    this.monthlyForm.reset();
  }

  onSubmitChangeForm() {
    console.log('onSubmitChangeForm');
    // if (this.changeForm.invalid) {
    //   return;
    // }
    // console.log(this.changeForm);
    this.service.changMonthlyCharges(this.changeForm.value);
    // this.monthlyForm.reset();
  }

  onDelete(id: string) {
    this.service.removeMonthlyCharges(id);
  }

  addFixedCharges(budget: Budget) {
    this.service.newFixedCharges(budget);
  }

  modifyMonthlyCharges(item: Budget) {
    this.service.modifyMonthlyCharges(item);
  }
}
