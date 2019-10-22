import {Injectable} from '@angular/core';
import {root} from 'rxjs/internal-compatibility';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Budget, Genre} from './budget.model';

@Injectable({
  providedIn: 'root'
})
export class StaticDataSource {

  shoppingsRef: AngularFireList<Budget>;
  visaRef: AngularFireList<Budget>;

  constructor(private firebasedb: AngularFireDatabase) {
    this.shoppingsRef = this.firebasedb.list('budgets', ref => {
      return ref.orderByChild('genre').equalTo(Genre.V);
    });
    this.visaRef = this.firebasedb.list('budgets', ref => {
      return ref.orderByChild('genre').equalTo(Genre.VD);
    });
  }

  getShoppingList() {
    return this.shoppingsRef;
  }

  getVisaList() {
    return this.visaRef;
  }

  addShopping(value: any) {
    this.shoppingsRef.push(value);
  }

  addVisa(value: any) {
    this.visaRef.push(value);
  }

  // formDate(date: Date) {
  //   const day = date.getDate();
  //   const month = date.getMonth() + 1;
  //   const year = date.getFullYear();
  //   return `${day}-${month}-${year}`;
  // }

  removeShopping(id: string) {
    this.shoppingsRef.remove(id);
  }

  removeVisa(id: string) {
    this.visaRef.remove(id);
  }


}
