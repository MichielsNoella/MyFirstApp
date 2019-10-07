import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Shopping} from '../shopping.model';
import {StaticDataSource} from '../static.datasource';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  shoppings: Shopping[];

  constructor(
    private service: StaticDataSource
  ) {
  }

  ngOnInit() {
    this.service.getShopping().subscribe(res => this.shoppings = res);
    // this.service.getShopping().subscribe(res => this.shoppings = res.filter(item => !item.done));
  }
  getTodoItems() {
    // return this.shoppings;
    return this.shoppings.filter(item => !item.done);
    // return this.model.items; // geeft de waarde terug
  }
}
