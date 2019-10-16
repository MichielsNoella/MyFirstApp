import {Component, OnInit} from '@angular/core';
import {StaticDataSource} from '../static.datasource';
import {Shopping} from '../shopping.model';

@Component({
  selector: 'app-shopping-page',
  templateUrl: './shopping-page.component.html',
  styleUrls: ['./shopping-page.component.css']
})
export class ShoppingPageComponent implements OnInit {

  shoppings: Shopping[];

  constructor(private service: StaticDataSource) {
  }

  ngOnInit() {
    this.service.getShoppingList().snapshotChanges()
      .subscribe(item => {
        this.shoppings = [];
        item.forEach(element => {
          const x = element.payload.toJSON();
          x[`id`] = element.key;
          this.shoppings.push(x);
        });
      });

  }

  addShopping($event: any) {
    this.service.addNewExpense($event);
  }

  // erzerazerze($event: any) {
  //
  // }
}
