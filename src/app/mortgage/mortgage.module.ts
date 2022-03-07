import { NgxsModule } from '@ngxs/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MortgageRoutingModule } from './mortgage-routing.module';
import { MortgageCalculatorComponent } from './components/mortgage-calculator/mortgage-calculator.component';
import { SharedModule } from '../shared/shared.module';
import { MortgageQuoteDetailsComponent } from './components/mortgage-quote-details/mortgage-quote-details.component';


@NgModule({
  declarations: [
    MortgageCalculatorComponent,
    MortgageQuoteDetailsComponent
  ],
  imports: [
    SharedModule,
    MortgageRoutingModule
  ]
})
export class MortgageModule { }
