import {Injectable} from '@angular/core';
import {root} from 'rxjs/internal-compatibility';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Budget, Genre} from './budget.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StaticDataSource {

  budgetRef: AngularFireList<Budget>;
  shoppingsRef: AngularFireList<Budget>;
  visaDannyRef: AngularFireList<Budget>;

  constructor(private firebasedb: AngularFireDatabase) {
    this.budgetRef = this.firebasedb.list('budgets');
    this.shoppingsRef = this.firebasedb.list('budgets', ref => {
      return ref.orderByChild('genre').equalTo(Genre.VARIOUS);
    });
    this.visaDannyRef = this.firebasedb.list('budgets', ref => {
      return ref.orderByChild('genre').equalTo(Genre.VISA_D);
    });
  }

  updpateStartAmount(inputStartAmount: string) {
    this.firebasedb.object('configApp').update({startAmount: inputStartAmount});
  }

  getStartAmount(): Observable<string> {
    return this.firebasedb.object('configApp/startAmount').valueChanges();
  }

  getTotalList(): Observable<Budget[]> {
    return this.budgetRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({id: c.payload.key, ...c.payload.val()})
        )
      )
    );
  }

  getShoppingList(): Observable<Budget[]> {
    return this.shoppingsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({id: c.payload.key, ...c.payload.val()})
        )
      )
    );
  }

  getVisaDannyList() {
    return this.visaDannyRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({id: c.payload.key, ...c.payload.val()})
        )
      )
    );
  }

  addShopping(value: any) {
    this.shoppingsRef.push(value);
  }

  addVisaDanny(value: any) {
    this.visaDannyRef.push(value);
  }

  removeShopping(id: string) {
    this.shoppingsRef.remove(id);
  }

  removeVisaDanny(id: string) {
    this.visaDannyRef.remove(id);
  }

}
