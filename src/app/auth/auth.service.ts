import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // user: User;
  userData: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
    this.userData = angularFireAuth.authState;
  }

  // constructor(public  afAuth: AngularFireAuth, public  router: Router) {
  //   this.afAuth.authState.subscribe(user => {
  //     if (user) {
  //       this.user = user;
  //       localStorage.setItem('user', JSON.stringify(this.user));
  //     } else {
  //       localStorage.setItem('user', null);
  //     }
  //   });
  // }
  /* Sign in */
  signIn(email: string, password: string) {
    console.log(email);
    console.log(password);
    this.angularFireAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed in!');
        this.router.navigate(['home/home']);
      })
      .catch(err => {
        console.log('Something is wrong:', 'Verkeerd paswoord en/of email : toegang geweigerd');
        console.log(err);
      });
  }

  /* Sign out */
  signOut() {
    this.angularFireAuth
      .auth
      .signOut();
  }

  // async login(email: string, password: string) {
  //   const result = await this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
  //   this.router.navigate(['admin/list']);
  // }

  // async register(email: string, password: string) {
  //   const result = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  //   this.sendEmailVerification();
  // }
  //
  // async sendEmailVerification() {
  //   await this.afAuth.auth.currentUser.sendEmailVerification();
  //   this.router.navigate(['admin/verify-email']);
  // }
  //
  // async sendPasswordResetEmail(passwordResetEmail: string) {
  //   return await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
  // }

  // async logout() {
  //   await this.afAuth.auth.signOut();
  //   localStorage.removeItem('user');
  //   this.router.navigate(['admin/login']);
  // }

  // get isLoggedIn(): boolean {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   return user !== null;
  // }

}
