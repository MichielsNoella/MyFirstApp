import {Component, OnInit} from '@angular/core';
import {StaticDataSource} from '../static.datasource';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingListArray: any[];

  // shoppings: Shopping[];

  constructor(
    private service: StaticDataSource
  ) {
  }

  ngOnInit() {
    this.service.getShoppingList().snapshotChanges()
      .subscribe(item => {
        this.shoppingListArray = [];
        item.forEach(element => {
          const x = element.payload.toJSON();
          x[`$key`] = element.key;
          this.shoppingListArray.push(x);
        });

        // sort array isChecked false  -> true
        this.shoppingListArray.sort((a, b) => {
          return a.isChecked - b.isChecked;
        });
      });
  }


  alterCheck($key: string, isChecked) {
    this.service.checkOrUnCheckTitle($key, !isChecked);
  }

  onDelete($key: string) {
    this.service.removeShopping($key);
  }
}
