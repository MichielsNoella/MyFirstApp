import {Component, OnInit} from '@angular/core';
import {StaticDataSource} from '../static.datasource';
import {Budget, Genre} from '../budget.model';

@Component({
  selector: 'app-visaDanny-page',
  templateUrl: './visa-danny-page.component.html',
  styleUrls: ['./visa-danny-page.component.css']
})
export class VisaDannyPageComponent implements OnInit {

  visasDanny: Budget[];

  constructor(private service: StaticDataSource) {
  }

  ngOnInit() {
    this.service.getVisaDannyList().subscribe(budgets => {
      this.visasDanny = budgets;
    });
  }

  addVisaDanny($event: Budget) {
    $event.genre = Genre.VISA_D;
    this.service.addVisaDanny($event);
  }

  deleteVisaDanny($event: string) {
    this.service.removeVisaDanny($event);
  }
}
