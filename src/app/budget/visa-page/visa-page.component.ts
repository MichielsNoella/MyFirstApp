import {Component, OnInit} from '@angular/core';
import {StaticDataSource} from '../static.datasource';
import {Budget} from '../budget.model';

@Component({
  selector: 'app-visa-page',
  templateUrl: './visa-page.component.html',
  styleUrls: ['./visa-page.component.css']
})
export class VisaPageComponent implements OnInit {

  visas: Budget[];

  constructor(private service: StaticDataSource) {
  }

  ngOnInit() {
    this.service.getVisaList().subscribe(budgets => {
      this.visas = budgets;
    });
  }

  addVisa($event: any) {
    this.service.addVisa($event);
  }

  deleteVisa($event: string) {
    this.service.removeVisa($event);
  }
}
