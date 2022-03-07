import { NgModule, enableProdMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RepaymentTimePipe } from './pipes/repayment-time.pipe';



@NgModule({
  declarations: [
    RepaymentTimePipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    CommonModule,
    RepaymentTimePipe
  ]
})
export class SharedModule { }
