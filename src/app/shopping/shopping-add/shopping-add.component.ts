import {Component, OnInit} from '@angular/core';
import {StaticDataSource} from '../static.datasource';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Genre} from '../shopping.model';

@Component({
  selector: 'app-shopping-add',
  templateUrl: './shopping-add.component.html',
  styleUrls: ['./shopping-add.component.css']
})
export class ShoppingAddComponent implements OnInit {
  direction = Genre;
  selectedDirection: Genre;

  addNewExpenseForm = new FormGroup({
    purchaseDescription: new FormControl('', Validators.required),
    purchaseAmount: new FormControl('', [Validators.required, Validators.required, Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]),
    purchaseDate: new FormControl('', Validators.required),
    genre: new FormControl('')
  });

  // get purchaseDescription() {
  //   return this.addNewExpenseForm.get('purchaseDescription');
  // }

  get f() {
    return this.addNewExpenseForm.controls;
  }

  constructor(
    private service: StaticDataSource
  ) {
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.addNewExpenseForm.invalid) {
      return;
    }

    const d = this.addNewExpenseForm.controls.purchaseDate.value;
    this.addNewExpenseForm.controls.purchaseDate.setValue(d.year + '-' + d.month + '-' + d.day);
    this.service.addNewExpense(this.addNewExpenseForm.value);
    this.addNewExpenseForm.reset();
  }

  getDirection() {
    return Object.values(Genre);
  }
}
