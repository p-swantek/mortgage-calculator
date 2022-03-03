import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MortgageCalculatorComponent } from './components/mortgage-calculator/mortgage-calculator.component';

const routes: Routes = [
  {
    path: '',
    component: MortgageCalculatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MortgageRoutingModule { }
