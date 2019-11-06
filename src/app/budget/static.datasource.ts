import {Injectable} from '@angular/core';
import {root} from 'rxjs/internal-compatibility';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Budget, Genre, Revenues} from './budget.model';
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
  revenuesRef: AngularFireList<Revenues>;
  monthlyRevenuesRef: AngularFireList<Revenues>;

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
    this.revenuesRef = this.firebasedb.list('revenues', ref => {
      return ref.orderByChild('genre').equalTo(Genre.REVENUES);
    });
    this.monthlyRevenuesRef = this.firebasedb.list('revenues', ref => {
      return ref.orderByChild('genre').equalTo(Genre.MONTHLY_REVENUES);
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

  getTotalListRevenues(): Observable<Revenues[]> {
    return this.revenuesRef.snapshotChanges().pipe(
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

  getRevenuesList() {
    return this.revenuesRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({id: c.payload.key, ...c.payload.val()})
        )
      )
    );
  }

  getMonthlyRevenuesList() {
    return this.monthlyRevenuesRef.snapshotChanges().pipe(
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

  addMonthlyRevenues(value: Revenues) {
    this.monthlyRevenuesRef.push(value);
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

  newFixedCharges(budget: Budget) {
    budget.genre = Genre.FIXED_CHARGES;
    budget.id = null;
    this.fixedChargesRef.push(budget);
  }

  newMonthlyRevenues(revenues: Revenues) {
    revenues.genre = Genre.REVENUES;
    revenues.id = null;
    this.revenuesRef.push(revenues);
  }

  changeMonthlyCharges(budget: Budget) {
    this.monthlyChargesRef.update(budget.id, budget);
  }

  changeMonthlyRevenues(budget: Budget) {
    this.monthlyRevenuesRef.update(budget.id, budget);
  }

  removeRevenues(id: string) {
    this.revenuesRef.remove(id);
  }

  removeMonthlyRevenues(id: string) {
    this.monthlyRevenuesRef.remove(id);
  }

}
