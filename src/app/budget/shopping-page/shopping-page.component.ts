import {Component, OnInit} from '@angular/core';
import {StaticDataSource} from '../static.datasource';
import {Budget} from '../budget.model';

@Component({
  selector: 'app-shopping-page',
  templateUrl: './shopping-page.component.html',
  styleUrls: ['./shopping-page.component.css']
})
export class ShoppingPageComponent implements OnInit {

  shoppings: Budget[];

  constructor(private service: StaticDataSource) {
  }

  ngOnInit() {
    this.service.getShoppingList().subscribe(budgets => {
      this.shoppings = budgets;
    });
  }

  addShopping($event: any) {
    this.service.addShopping($event);
  }

  deleteShopping($event: string) {
    this.service.removeShopping($event);
  }
}
