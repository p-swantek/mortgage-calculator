import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MortgageCalculatorService {
  constructor() {}

  calculateMonthlyPayment(purchasePrice: number, downPayment: number, interestRate: number, repaymentTime: number): number {
    const principal = Math.max(purchasePrice - downPayment, 0);
    const numPayments = repaymentTime * 12;
    const monthlyInterestRate = interestRate / 100 / 12;
    if (monthlyInterestRate === 0) {
      return principal / numPayments;
    }
    const result = principal * ((monthlyInterestRate * (1 + monthlyInterestRate) ** numPayments) / ((1 + monthlyInterestRate) ** numPayments - 1));

    return result;
  }
}
