import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  errorMessage: string;

  constructor(private  authService: AuthService, private router: Router) {
  }

  signIn(email: string, password: string) {
    this.authService.signIn(email, password)
      .then(res => {
        console.log('Successfully signed in!');
        this.router.navigate(['home/home']);
      })
      .catch(err => {
        console.log('Something is wrong:', 'Verkeerd paswoord en/of email : toegang geweigerd');
        console.log(err);
        this.errorMessage = 'Something is wrong: Verkeerd paswoord en/of email : toegang geweigerd';
      });
  }

  signOut() {
    this.authService.signOut();
  }

  ngOnInit() {
  }

}
