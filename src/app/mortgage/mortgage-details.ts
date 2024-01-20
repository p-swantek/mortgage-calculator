import { FormControl } from "@angular/forms";

export interface MortgageDetails {
  purchasePrice: number;
  downPayment: number;
  interestRate: number;
  repaymentTime: number;
  paymentPerMonth: number;
  loanAmount: number;
}

export interface MortgageDetailsForm {
  purchasePrice: FormControl<number>
  downPayment: FormControl<number>
  repaymentTime: FormControl<number>
  interestRate: FormControl<number>
  loanAmount: FormControl<number>
  paymentPerMonth: FormControl<number>
}
