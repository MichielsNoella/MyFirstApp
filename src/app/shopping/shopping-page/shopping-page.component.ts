import {Component, OnInit} from '@angular/core';
import {StaticDataSource} from '../static.datasource';

@Component({
  selector: 'app-shopping-page',
  templateUrl: './shopping-page.component.html',
  styleUrls: ['./shopping-page.component.css']
})
export class ShoppingPageComponent implements OnInit {

  constructor(private service: StaticDataSource) {
  }

  ngOnInit() {
  }

  addShopping($event: any) {
    this.service.addNewExpense($event);
  }

  // erzerazerze($event: any) {
  //
  // }
}
