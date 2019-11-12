import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Genre, Other, Sum} from './other.model';
import {StaticDataSource} from './static.datasource';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  sum$: Observable<Sum>;
  startToSaveNoella: Other[];

  constructor(private service: StaticDataSource, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {

    this.sum$ = this.service.getTotalList().pipe(
      map(order => order.reduce((total, other) => {
        if (other.genre === Genre.START_TO_SAVE_NOELLA) {
          total.startToSaveNoella = +total.startToSaveNoella + +other.amount;
        }

        total.total = +total.total + +other.amount;

        return total;
      }, new Sum()))
    );

    this.service.getStartToSaveNoellaList().subscribe(other => {
      this.startToSaveNoella = other;
    });
  }

  /* Sign out */
  signOut() {
    this.authService.signOut();
    this.router.navigate(['admin/login']);
  }
}
