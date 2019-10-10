import {Injectable} from '@angular/core';
import {root} from 'rxjs/internal-compatibility';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Shopping} from './shopping.model';

@Injectable({
  providedIn: 'root'
})
export class StaticDataSource {

  shoppings$: AngularFireList<Shopping>;

  constructor(private firebasedb: AngularFireDatabase) {
    this.shoppings$ = this.firebasedb.list('shoppings');
  }

  getShoppingList() {
    return this.shoppings$;
  }

  addNewExpense(shopping: string, amount: number, date: Date) {
    this.shoppings$.push({
      purchaseDescription: shopping,
      purchaseAmount: amount,
      purchaseDate: this.formDate(date)
    });
  }

  formDate(date: Date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  removeShopping(id: string) {
    this.shoppings$.remove(id);
  }
}
