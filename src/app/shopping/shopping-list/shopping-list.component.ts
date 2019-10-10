import {Component, OnInit} from '@angular/core';
import {StaticDataSource} from '../static.datasource';
import {Shopping} from '../shopping.model';

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

  onDelete(id: string) {
    this.service.removeShopping(id);
  }
}
