import {Component, OnInit} from '@angular/core';
import {StaticDataSource} from '../budget/static.datasource';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Genre, Sum} from '../budget/budget.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  total$: Observable<number>;

  sum$: Observable<Sum>; // {shopping: 0, visa: 0, total: 0}
  startAmount$: Observable<string>;

  result$: Observable<number>;

  constructor(private service: StaticDataSource) {
  }

  ngOnInit() {
    this.startAmount$ = this.service.getStartAmount();
    this.sum$ = this.service.getTotalList().pipe(
      map(order => order.reduce((total, budget) => {
        if (budget.genre === Genre.VARIOUS) {
          total.shopping = +total.shopping + +budget.amount;
        } else if (budget.genre === Genre.VISA_D) {
          total.visaDanny = +total.visaDanny + +budget.amount;
        }
        total.total = +total.total + +budget.amount;
        return total;
      }, new Sum()))
    );

    this.result$ = combineLatest(this.startAmount$, this.sum$).pipe(
      map(([startAmount, sum]) => {
        return +startAmount - sum.total;
      })
    );
  }

  updateStartAmount(inputStartAmount: string) {
    this.service.updpateStartAmount(inputStartAmount);
  }
}
