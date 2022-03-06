import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MortgageCalculatorService {

  constructor() { }

  calculateMonthlyPayment(purchasePrice: number, downPayment: number, interestRate: number, repaymentTime: number): number {
    let principal = purchasePrice - downPayment;
    let numPayments = repaymentTime * 12;
    let monthlyInterestRate = (interestRate / 100) / 12;
    let result = principal * ((monthlyInterestRate * ((1 + monthlyInterestRate) ** numPayments)) / (((1 + monthlyInterestRate) ** numPayments) - 1));

    return result;
  }
}
