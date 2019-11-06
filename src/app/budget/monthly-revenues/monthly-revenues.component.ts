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

  monthlyRevenues: Revenues[];

  monthlyRevenuesForm = new FormGroup({
    description: new FormControl('', Validators.required),
    amount: new FormControl('', [Validators.required, Validators.required, Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]),
    genre: new FormControl(Genre.MONTHLY_REVENUES)
  });

  get f() {
    return this.monthlyRevenuesForm.controls;
  }

  constructor(private service: StaticDataSource) {
  }

  ngOnInit() {
    this.service.getMonthlyRevenuesList().subscribe(revenues => {
      this.monthlyRevenues = revenues;
    });
  }

  onSubmit() {
    if (this.monthlyRevenuesForm.invalid) {
      return;
    }

    this.service.addMonthlyRevenues(this.monthlyRevenuesForm.value);

    this.monthlyRevenuesForm.reset();
    this.f.genre.setValue(Genre.MONTHLY_REVENUES);
  }

  addRevenues(revenues: Revenues) {
    this.service.newMonthlyRevenues(revenues);
  }

  onDelete(id: string) {
    this.service.removeRevenues(id);
  }
}
