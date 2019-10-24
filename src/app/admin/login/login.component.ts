import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private  authService: AuthService) {
  }

  signIn(email: string, password: string) {
    console.log('.......................');
    console.log(email);
    console.log(password);
    this.authService.signIn(email, password);
  }

  signOut() {
    this.authService.signOut();
  }

  ngOnInit() {
  }

}
