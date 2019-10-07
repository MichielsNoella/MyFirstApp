import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {Shopping} from './shopping.model';
import {root} from 'rxjs/internal-compatibility';

import {filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StaticDataSource {
  private shopping: Shopping[] = [
    new Shopping(1, 'AA', 25, false),
    new Shopping(2, 'AB', 75, false),
    new Shopping(2, 'AB', 75, true)
  ];

  getShopping(): Observable<Shopping[]> {
    return from([this.shopping]);
    // return from([this.shopping]).pipe(
    //   map(res => res.filter(p => !p.done))
    // );
  }

  getShoppingd(): Observable<Shopping[]> {
    return from([this.shopping]);
  }

  //
  // saveOrder(order: Order): Observable<Order> {
  //   console.log(JSON.stringify(order));
  //   return from([order]);
  // }
}
