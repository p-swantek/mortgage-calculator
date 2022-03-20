import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MortgageCalculatorComponent } from './components/mortgage-calculator/mortgage-calculator.component';
import { MortgageQuoteDetailsComponent } from './components/mortgage-quote-details/mortgage-quote-details.component';
import { MortgageRoutingModule } from './mortgage-routing.module';

@NgModule({
  declarations: [MortgageCalculatorComponent, MortgageQuoteDetailsComponent],
  imports: [SharedModule, MortgageRoutingModule]
})
export class MortgageModule {}
