import {Injectable} from '@angular/core';
import {root} from 'rxjs/internal-compatibility';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Budget} from './budget.model';

@Injectable({
  providedIn: 'root'
})
export class StaticDataSource {

  shoppings$: AngularFireList<Budget>;
  salaire$: AngularFireList<Budget>;

  constructor(private firebasedb: AngularFireDatabase) {
    this.shoppings$ = this.firebasedb.list('shoppings');
  }

  getShoppingList() {
    return this.shoppings$;
  }

  addNewExpense(value: any) {
    this.shoppings$.push(value);
  }

  // formDate(date: Date) {
  //   const day = date.getDate();
  //   const month = date.getMonth() + 1;
  //   const year = date.getFullYear();
  //   return `${day}-${month}-${year}`;
  // }

  removeShopping(id: string) {
    this.shoppings$.remove(id);
  }

}
