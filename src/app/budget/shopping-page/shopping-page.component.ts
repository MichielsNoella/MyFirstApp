import {Component, OnInit} from '@angular/core';
import {StaticDataSource} from '../static.datasource';
import {Budget, Genre} from '../budget.model';

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
    // let id = this.route.snapshot.paramMap.get('id');
    const genre: Genre = Genre.V;

    this.service.getShoppingList().snapshotChanges()
      .subscribe(item => {
        this.shoppings = [];
        item.forEach(element => {
          const x = element.payload.toJSON();
          x[`id`] = element.key;
          this.shoppings.push(x);
        });
        this.shoppings.filter(i => i.genre === genre);
      });
  }

  addShopping($event: any) {
    this.service.addNewExpense($event);
  }

  deleteShopping($event: string) {
    this.service.removeShopping($event);
  }
}
