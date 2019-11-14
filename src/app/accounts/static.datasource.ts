import {Injectable} from '@angular/core';
import {root} from 'rxjs/internal-compatibility';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Account, Genre} from './accounts.model';

@Injectable({
  providedIn: 'root'
})
export class StaticDataSource {

  accountRef: AngularFireList<Account>;
  startToSaveNoellaRef: AngularFireList<Account>;
  startToSaveDannyRef: AngularFireList<Account>;
  startToSaveRef: AngularFireList<Account>;
  savingAccountRef: AngularFireList<Account>;
  newAmount: string;

  constructor(private firebasedb: AngularFireDatabase) {
    this.accountRef = this.firebasedb.list('accounts');
    this.startToSaveNoellaRef = this.firebasedb.list('accounts', ref => {
      return ref.orderByChild('genre').equalTo(Genre.START_TO_SAVE_NOELLA);
    });
    this.startToSaveDannyRef = this.firebasedb.list('accounts', ref => {
      return ref.orderByChild('genre').equalTo(Genre.START_TO_SAVE_DANNY);
    });
    this.startToSaveRef = this.firebasedb.list('accounts', ref => {
      return ref.orderByChild('genre').equalTo(Genre.START_TO_SAVE);
    });
    this.savingAccountRef = this.firebasedb.list('accounts', ref => {
      return ref.orderByChild('genre').equalTo(Genre.SAVING_ACCOUNT);
    });
  }

  getTotalList(): Observable<Account[]> {
    return this.accountRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({id: c.payload.key, ...c.payload.val()})
        )
      )
    );
  }

  getStartToSaveNoellaList() {
    return this.startToSaveNoellaRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({id: c.payload.key, ...c.payload.val()})
        )
      )
    );
  }

  getStartToSaveDannyList() {
    return this.startToSaveDannyRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({id: c.payload.key, ...c.payload.val()})
        )
      )
    );
  }

  getStartToSaveList() {
    return this.startToSaveRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({id: c.payload.key, ...c.payload.val()})
        )
      )
    );
  }

  getSavingAccountList() {
    return this.savingAccountRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({id: c.payload.key, ...c.payload.val()})
        )
      )
    );
  }

  modifyAccount(account: Account) {
    const id = account.id;
    account.id = null;
    this.startToSaveNoellaRef.update(id, account);
  }
}
