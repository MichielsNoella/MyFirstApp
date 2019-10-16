import {Component, Input, OnInit} from '@angular/core';
import {StaticDataSource} from '../static.datasource';
import {Shopping} from '../shopping.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  @Input() shoppings: Shopping[];

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
