import {Component, OnInit} from '@angular/core';
import {Shopping} from '../shopping.model';
import {StaticDataSource} from '../static.datasource';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  toDoListArray: any[];
  // shoppings: Shopping[];

  constructor(
    private service: StaticDataSource
  ) {
  }

  // ngOnInit() {
  //   this.service.getShopping().subscribe(res => this.shoppings = res);
  //   // this.service.getShopping().subscribe(res => this.shoppings = res.filter(item => !item.done));
  // }
  //
  // getTodoItems() {
  //   // return this.shoppings;
  //   return this.shoppings.filter(item => !item.done);
  //   // return this.model.items; // geeft de waarde terug
  // }

  ngOnInit() {
    this.service.getToDoList().snapshotChanges()
      .subscribe(item => {
        this.toDoListArray = [];
        item.forEach(element => {
          const x = element.payload.toJSON();
          x[`$key`] = element.key;
          this.toDoListArray.push(x);
        });

        // sort array isChecked false  -> true
        this.toDoListArray.sort((a, b) => {
          return a.isChecked - b.isChecked;
        });
      });
  }

  onAdd(itemTitle, itemAmount, itemDate) {
    this.service.addTitle(itemTitle.value, itemAmount.value, itemDate.value);
    itemTitle.value = null;
    itemAmount.value = null;
    itemDate.value = null;
  }

  alterCheck($key: string, isChecked) {
    this.service.checkOrUnCheckTitle($key, !isChecked);
  }

  onDelete($key: string) {
    this.service.removeTitle($key);
  }
}
