import { Component, OnInit } from '@angular/core';
import {StaticDataSource} from '../static.datasource';

@Component({
  selector: 'app-shopping-add',
  templateUrl: './shopping-add.component.html',
  styleUrls: ['./shopping-add.component.css']
})
export class ShoppingAddComponent implements OnInit {

  constructor(
    private service: StaticDataSource
  ) { }

  ngOnInit() {
  }

  onAdd(itemTitle, itemAmount, itemDate) {
    this.service.addNewExpense(itemTitle.value, itemAmount.value, itemDate.value);
    itemTitle.value = null;
    itemAmount.value = null;
    itemDate.value = null;
  }
}
