import {Component, OnInit} from '@angular/core';
import {StaticDataSource} from '../budget/static.datasource';
import {Observable} from 'rxjs';
import {map, reduce} from 'rxjs/operators';
import {Genre, Sum} from '../budget/budget.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  total$: Observable<number>;

  sum$: Observable<Sum>; // {shopping: 0, visa: 0, total: 0}

  constructor(private service: StaticDataSource) {
  }

  ngOnInit() {
    this.sum$ = this.service.getTotalList().pipe(
      map(order => order.reduce((total, budget) => {
        console.log(total);
        console.log(budget.amount);
        if (budget.genre === Genre.VARIOUS) {
          total.shopping = +total.shopping + +budget.amount;
        } else if (budget.genre === Genre.VISA_D) {
          total.visa = +total.visa + +budget.amount;
        }
        total.total = +total.total + +budget.amount;
        return total;
      }, new Sum()))
    );
  }

}
