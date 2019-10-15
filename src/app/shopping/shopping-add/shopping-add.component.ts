import {Component, OnInit} from '@angular/core';
import {StaticDataSource} from '../static.datasource';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-shopping-add',
  templateUrl: './shopping-add.component.html',
  styleUrls: ['./shopping-add.component.css']
})
export class ShoppingAddComponent implements OnInit {

  addNewExpenseForm = new FormGroup({
    purchaseDescription: new FormControl(''),
    purchaseAmount: new FormControl(''),
    purchaseDate: new FormControl()
  });

  constructor(
    private service: StaticDataSource
  ) {
  }

  ngOnInit() {
  }

  onSubmit() {
    const d = this.addNewExpenseForm.controls.purchaseDate.value;
    this.addNewExpenseForm.controls.purchaseDate.setValue(d.year + '-' + d.month + '-' + d.day);
    // console.log(this.addNewExpenseForm.controls.purchaseDate.value);
    this.service.addNewExpense(this.addNewExpenseForm.value);
  }

}
