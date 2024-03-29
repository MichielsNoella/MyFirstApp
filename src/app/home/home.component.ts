import {Component, OnInit} from '@angular/core';
import {StaticDataSource} from '../budget/static.datasource';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Genre, Sum, SumRevenues} from '../budget/budget.model';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeForm = new FormGroup({
    amount: new FormControl('', [Validators.required, Validators.required, Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)])
  });

  total$: Observable<number>;

  sum$: Observable<Sum>; // {shopping: 0, visa: 0, total: 0}
  sumRevenues$: Observable<SumRevenues>;
  startAmount$: Observable<string>;

  result$: Observable<number>;

  constructor(private service: StaticDataSource, private authService: AuthService, private router: Router) {
  }

  get f() {
    return this.homeForm.controls;
  }

  onSubmit() {
    if (this.homeForm.invalid) {
      return;
    }

    this.service.updateStartAmount(this.homeForm.controls.amount.value);
  }

  ngOnInit() {
    this.startAmount$ = this.service.getStartAmount();

    this.sum$ = this.service.getTotalList().pipe(
      map(order => order.reduce((total, budget) => {
        if (budget.genre === Genre.VARIOUS) {
          total.shopping = +total.shopping + +budget.amount;
        } else if (budget.genre === Genre.VISA_D) {
          total.visaDanny = +total.visaDanny + +budget.amount;
        } else if (budget.genre === Genre.VISA_N) {
          total.visaNoella = +total.visaNoella + +budget.amount;
        } else if (budget.genre === Genre.FIXED_CHARGES) {
          total.fixedCharges = +total.fixedCharges + +budget.amount;
        }

        if (budget.genre !== Genre.MONTHLY_CHARGES) {
          total.total = +total.total + +budget.amount;
        }
        return total;
      }, new Sum()))
    );

    this.sumRevenues$ = this.service.getTotalListRevenues().pipe(
      map(order => order.reduce((totalRevenues, revenues) => {
        if (revenues.genre === Genre.REVENUES) {
          totalRevenues.revenues = +totalRevenues.revenues + +revenues.amount;
        }
        return totalRevenues;
      }, new SumRevenues()))
    );

    this.result$ = combineLatest(this.startAmount$, this.sum$, this.sumRevenues$).pipe(
      map(([startAmount, sum, sumRevenues]) => {
        return +startAmount - sum.total + +sumRevenues.revenues;
      })
    );
  }

  /* Sign out */
  signOut() {
    this.authService.signOut();
    this.router.navigate(['admin/login']);
  }
}
