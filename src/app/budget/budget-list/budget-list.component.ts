import {Component, Input, OnInit} from '@angular/core';
import {StaticDataSource} from '../static.datasource';
import {Budget} from '../budget.model';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {

  @Input() budgets: Budget[];

  // TODO create event remove

  constructor(
    private service: StaticDataSource
  ) {
  }

  ngOnInit() {
  }

  onDelete(id: string) {
    this.service.removeShopping(id);
  }
}
