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
  visaNoellaRef: AngularFireList<Budget>;
  fixedChargesRef: AngularFireList<Budget>;
  monthlyChargesRef: AngularFireList<Budget>;

  constructor(private firebasedb: AngularFireDatabase) {
    this.budgetRef = this.firebasedb.list('budgets');
    this.shoppingsRef = this.firebasedb.list('budgets', ref => {
      return ref.orderByChild('genre').equalTo(Genre.VARIOUS);
    });
    this.visaDannyRef = this.firebasedb.list('budgets', ref => {
      return ref.orderByChild('genre').equalTo(Genre.VISA_D);
    });
    this.visaNoellaRef = this.firebasedb.list('budgets', ref => {
      return ref.orderByChild('genre').equalTo(Genre.VISA_N);
    });
    this.fixedChargesRef = this.firebasedb.list('budgets', ref => {
      return ref.orderByChild('genre').equalTo(Genre.FIXED_CHARGES);
    });
    this.monthlyChargesRef = this.firebasedb.list('budgets', ref => {
      return ref.orderByChild('genre').equalTo(Genre.MONTHLY_CHARGES);
    });
  }

  updateStartAmount(inputStartAmount: string) {
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

  getVisaNoellaList() {
    return this.visaNoellaRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({id: c.payload.key, ...c.payload.val()})
        )
      )
    );
  }

  getFixedChargesList() {
    return this.fixedChargesRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({id: c.payload.key, ...c.payload.val()})
        )
      )
    );
  }

  getMonthlyChargesList() {
    return this.monthlyChargesRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({id: c.payload.key, ...c.payload.val()})
        )
      )
    );
  }

  addShopping(value: Budget) {
    this.shoppingsRef.push(value);
  }

  addVisaDanny(value: Budget) {
    this.visaDannyRef.push(value);
  }

  addVisaNoella(value: Budget) {
    this.visaNoellaRef.push(value);
  }

  addFixedCharges(value: Budget) {
    this.fixedChargesRef.push(value);
  }

  addMonthlyCharges(value: Budget) {
    this.monthlyChargesRef.push(value);
  }

  removeShopping(id: string) {
    this.shoppingsRef.remove(id);
  }

  removeVisaDanny(id: string) {
    this.visaDannyRef.remove(id);
  }

  removeVisaNoella(id: string) {
    this.visaNoellaRef.remove(id);
  }

  removeFixedCharges(id: string) {
    this.fixedChargesRef.remove(id);
  }

  removeMonthlyCharges(id: string) {
    this.monthlyChargesRef.remove(id);
  }

  modifyMonthlyCharges(item: Budget) {
    console.log('item.id ' + item.id);
    console.log(item.extraComment);
    console.log(item.description);
    console.log(item.budgetDate);
    console.log(item.amount);
    console.log(item.genre);
  }

  newFixedCharges(budget: Budget) {
    this.firebasedb.database.ref().child('budgets').push().set({
      description: budget.description,
      amount: budget.amount,
      genre: Genre.FIXED_CHARGES
    });
  }
}
