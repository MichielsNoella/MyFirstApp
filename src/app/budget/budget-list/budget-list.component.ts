import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StaticDataSource} from '../static.datasource';
import {Budget} from '../budget.model';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {

  @Input() budgets: Budget[];
  @Output() delete: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private service: StaticDataSource
  ) {
  }

  ngOnInit() {
  }

  onDelete(id: string) {
    this.delete.emit(id);
  }
}
