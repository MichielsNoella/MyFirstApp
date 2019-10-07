import {Injectable} from '@angular/core';
import {root} from 'rxjs/internal-compatibility';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class StaticDataSource {
  toDoList: AngularFireList<any>;

  constructor(private firebasedb: AngularFireDatabase) {
  }


  // private shopping: Shopping[] = [
  //   new Shopping(1, 'AA', 25, false),
  //   new Shopping(2, 'AB', 75, false),
  //   new Shopping(2, 'AB', 75, true)
  // ];

  // getShopping(): Observable<Shopping[]> {
  //   return from([this.shopping]);
  //   // return from([this.shopping]).pipe(
  //   //   map(res => res.filter(p => !p.done))
  //   // );
  // }

  // getShoppingd(): Observable<Shopping[]> {
  //   return from([this.shopping]);
  // }

  getToDoList() {
    this.toDoList = this.firebasedb.list('shoppings');
    return this.toDoList;
  }

  addTitle(shopping: string, amount: number) {
    this.toDoList.push({
      isChecked: false,
      shoppingName: shopping,
      amounts: amount
    });
  }

  checkOrUnCheckTitle($key: string, flag: boolean) {
    this.toDoList.update($key, {isChecked: flag});
  }

  removeTitle($key: string) {
    this.toDoList.remove($key);
  }

  //
  // saveOrder(order: Order): Observable<Order> {
  //   console.log(JSON.stringify(order));
  //   return from([order]);
  // }
}
