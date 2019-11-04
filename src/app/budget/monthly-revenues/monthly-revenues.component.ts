import {Component, OnInit} from '@angular/core';
import {StaticDataSource} from '../static.datasource';
import {Genre, Revenues} from '../budget.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-revenues',
  templateUrl: './monthly-revenues.component.html',
  styleUrls: ['./monthly-revenues.component.css']
})
export class MonthlyRevenuesComponent implements OnInit {

  revenues: Revenues[];

  monthlyRevenuesForm = new FormGroup({
    description: new FormControl('', Validators.required),
    amount: new FormControl('', [Validators.required, Validators.required, Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]),
    // TODO bepaal genre
    genre: new FormControl(Genre.SALARY)
  });

  get f() {
    return this.monthlyRevenuesForm.controls;
  }

  constructor(private service: StaticDataSource) {
  }

  ngOnInit() {
    this.service.getRevenuesList().subscribe(revenues => {
      this.revenues = revenues;
    });
  }

  onSubmit() {
    if (this.monthlyRevenuesForm.invalid) {
      return;
    }

    this.service.addRevenues(this.monthlyRevenuesForm.value);

    this.monthlyRevenuesForm.reset();
  }
}
