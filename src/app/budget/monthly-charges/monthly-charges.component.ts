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
    this.f.genre.setValue(Genre.MONTHLY_CHARGES);
  }

}
