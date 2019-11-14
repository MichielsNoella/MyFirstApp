import {Component, OnInit} from '@angular/core';
import {Budget, Genre} from '../budget.model';
import {StaticDataSource} from '../static.datasource';

@Component({
  selector: 'app-fixed-charges',
  templateUrl: './fixed-charges.component.html',
  styleUrls: ['./fixed-charges.component.css']
})
export class FixedChargesComponent implements OnInit {

  fixedCharges: Budget[];

  constructor(private service: StaticDataSource) {
  }

  ngOnInit() {
    this.service.getFixedChargesList().subscribe(budgets => {
      this.fixedCharges = budgets;
    });
  }

  addFixedCharges($event: Budget) {
    $event.genre = Genre.FIXED_CHARGES;
    this.service.addFixedCharges($event);
  }

  deleteFixedCharges($event: string) {
    this.service.removeFixedCharges($event);
  }

}
