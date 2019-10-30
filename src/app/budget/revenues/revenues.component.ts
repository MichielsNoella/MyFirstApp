import {Component, OnInit} from '@angular/core';
import {StaticDataSource} from '../static.datasource';
import {Genre, Revenues} from '../budget.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-revenues',
  templateUrl: './revenues.component.html',
  styleUrls: ['./revenues.component.css']
})
export class RevenuesComponent implements OnInit {

  revenues: Revenues[];

  revenuesForm = new FormGroup({
    description: new FormControl('', Validators.required),
    amount: new FormControl('', [Validators.required, Validators.required, Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]),
    // TODO bepaal genre
    genre: new FormControl(Genre.SALARY)
  });

  get f() {
    return this.revenuesForm.controls;
  }

  constructor(private service: StaticDataSource) {
  }

  ngOnInit() {
    this.service.getRevenuesList().subscribe(revenues => {
      this.revenues = revenues;
    });
  }

  onSubmit() {
    if (this.revenuesForm.invalid) {
      return;
    }

    this.service.addRevenues(this.revenuesForm.value);

    this.revenuesForm.reset();
  }
}
