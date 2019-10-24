import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // user: User;
  userData: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.userData = angularFireAuth.authState;
  }

  get authenticated(): boolean {
    return this.angularFireAuth.auth.currentUser !== null;
  }


  /* Sign in */
  signIn(email: string, password: string): Promise<any> {
    return this.angularFireAuth
      .auth
      .signInWithEmailAndPassword(email, password);
  }

  /* Sign out */
  signOut() {
    this.angularFireAuth
      .auth
      .signOut();
  }
}
