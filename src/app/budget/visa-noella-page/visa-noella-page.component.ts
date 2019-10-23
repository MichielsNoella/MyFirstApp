import {Component, OnInit} from '@angular/core';
import {Budget, Genre} from '../budget.model';
import {StaticDataSource} from '../static.datasource';

@Component({
  selector: 'app-visa-noella-page',
  templateUrl: './visa-noella-page.component.html',
  styleUrls: ['./visa-noella-page.component.css']
})
export class VisaNoellaPageComponent implements OnInit {

  visasNoella: Budget[];

  constructor(private service: StaticDataSource) {
  }

  ngOnInit() {
    this.service.getVisaNoellaList().subscribe(budgets => {
      this.visasNoella = budgets;
    });
  }

  addVisaNoella($event: Budget) {
    $event.genre = Genre.VISA_N;
    this.service.addVisaNoella($event);
  }

  deleteVisaNoella($event: string) {
    this.service.removeVisaDanny($event);
  }
}
