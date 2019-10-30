import {Component, OnInit} from '@angular/core';
import {StaticDataSource} from '../static.datasource';
import {Revenues} from '../budget.model';

@Component({
  selector: 'app-revenues',
  templateUrl: './revenues.component.html',
  styleUrls: ['./revenues.component.css']
})
export class RevenuesComponent implements OnInit {

  revenues: Revenues[];

  constructor(private service: StaticDataSource) {
  }

  ngOnInit() {
    this.service.getRevenuesList().subscribe(revenues => {
      this.revenues = revenues;
    });
  }

}
