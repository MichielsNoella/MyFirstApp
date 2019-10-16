import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {StaticDataSource} from '../static.datasource';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Genre} from '../shopping.model';

@Component({
  selector: 'app-shopping-add',
  templateUrl: './shopping-add.component.html',
  styleUrls: ['./shopping-add.component.css']
})
export class ShoppingAddComponent implements OnInit {

  @Output() add: EventEmitter<any> = new EventEmitter<any>();

  direction = Genre;
  selectedDirection: Genre;

  budgetForm = new FormGroup({
    description: new FormControl('', Validators.required),
    amount: new FormControl('', [Validators.required, Validators.required, Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]),
    budgetDate: new FormControl('', Validators.required),
    genre: new FormControl('')
  });

  // get description() {
  //   return this.budgetForm.get('description');
  // }

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
