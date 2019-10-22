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

  startAmount$: Observable<string>;
  budgetRef: AngularFireList<Budget>;
  shoppingsRef: AngularFireList<Budget>;
  visaRef: AngularFireList<Budget>;

  constructor(private firebasedb: AngularFireDatabase) {
    this.startAmount$ = this.firebasedb.object('startAmount').valueChanges();
    this.budgetRef = this.firebasedb.list('budgets');
    this.shoppingsRef = this.firebasedb.list('budgets', ref => {
      return ref.orderByChild('genre').equalTo(Genre.VARIOUS);
    });
    this.visaRef = this.firebasedb.list('budgets', ref => {
      return ref.orderByChild('genre').equalTo(Genre.VISA_D);
    });
  }

  getStartAmount(): Observable<string> {
    return this.startAmount$;
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

  getVisaList() {
    return this.visaRef.snapshotChanges().pipe(
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

  addVisa(value: any) {
    this.visaRef.push(value);
  }

  removeShopping(id: string) {
    this.shoppingsRef.remove(id);
  }

  removeVisa(id: string) {
    this.visaRef.remove(id);
  }

}
