import {Injectable} from '@angular/core';
// import {Product} from './product.model';
import {from, Observable} from 'rxjs';
// import {Order} from './order.model';
import {Shopping} from './shopping.model';
import {root} from 'rxjs/internal-compatibility';

@Injectable({
  providedIn: 'root'
})
export class StaticDataSource {
  private shopping: Shopping[] = [
    new Shopping(1, 'AA', 25),
    new Shopping(2, 'AB', 75)
  ];

  getShopping(): Observable<Shopping[]> {
    return from([this.shopping]);
  }

  //
  // saveOrder(order: Order): Observable<Order> {
  //   console.log(JSON.stringify(order));
  //   return from([order]);
  // }
}
