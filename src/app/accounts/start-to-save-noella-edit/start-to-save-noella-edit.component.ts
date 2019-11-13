import {Component, Input, OnInit} from '@angular/core';
import {StaticDataSource} from '../static.datasource';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {Account} from '../accounts.model';

@Component({
  selector: 'app-start-to-save-noella-edit',
  templateUrl: './start-to-save-noella-edit.component.html',
  styleUrls: ['./start-to-save-noella-edit.component.css']
})
export class StartToSaveNoellaEditComponent implements OnInit {

  @Input() startToSaveNoella: Account;

  private success = new Subject<string>();

  staticAlertClosed = false;
  successMessage: string;

  changeForm: FormGroup;

  get f() {
    return this.changeForm.controls;
  }

  constructor(private service: StaticDataSource) {
  }

  ngOnInit() {
    this.changeForm = new FormGroup({
      amount: new FormControl(this.startToSaveNoella.amount, [Validators.required, Validators.required, Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]),
      genre: new FormControl(this.startToSaveNoella.genre),
      id: new FormControl(this.startToSaveNoella.id)
    });

    setTimeout(() => this.staticAlertClosed = true, 20000);

    this.success.subscribe((message) => this.successMessage = message);
    this.success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);
  }

  onSubmit() {
    if (this.changeForm.invalid) {
      return;
    }
    this.service.changeStartToSaveNoella(this.changeForm.value);
    this.success.next(`Bedrag gewijzigd`);
  }
}
