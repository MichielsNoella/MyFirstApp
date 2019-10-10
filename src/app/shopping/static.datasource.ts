import {Injectable} from '@angular/core';
import {root} from 'rxjs/internal-compatibility';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Shopping} from './shopping.model';

@Injectable({
  providedIn: 'root'
})
export class StaticDataSource {
  shoppingList: AngularFireList<Shopping>;

  constructor(private firebasedb: AngularFireDatabase) {
  }

  getShoppingList() {
    this.shoppingList = this.firebasedb.list('shoppings');
    return this.shoppingList;
  }

  addNewExpense(shopping: string, amount: number, date: Date) {
    this.shoppingList.push({
      isChecked: false,
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

  checkOrUnCheckTitle($key: string, flag: boolean) {
    this.shoppingList.update($key, {isChecked: flag});
  }

  removeShopping($key: string) {
    this.shoppingList.remove($key);
  }
}
