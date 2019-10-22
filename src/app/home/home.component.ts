import {Component, OnInit} from '@angular/core';
import {StaticDataSource} from '../budget/static.datasource';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: StaticDataSource) {
  }

  ngOnInit() {
  }

  addShopping($event) {
    this.service.addShopping($event);
  }
}
