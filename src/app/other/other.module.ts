import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherComponent } from './other.component';
import {OtherRoutingModule} from './other-routing.module';

@NgModule({
  declarations: [OtherComponent],
  imports: [
    OtherRoutingModule,
    CommonModule
  ]
})
export class OtherModule { }
