import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { MortgageCalculatorService } from '../../mortgage-calculator.service';
import { MortgageDetails } from '../../mortgage-details';
import { MortgageQuoteDetailsComponent } from '../mortgage-quote-details/mortgage-quote-details.component';
import { MatDialog } from '@angular/material/dialog';

export interface MortgageForm {
  purchasePrice: FormControl<number>
  downPayment: FormControl<number>
  repaymentTime: FormControl<number>
  interestRate: FormControl<number>
  loanAmount: FormControl<number>
  paymentPerMonth: FormControl<number>
}
const INITIAL_PURCHASE_PRICE = 3000000;
const INITIAL_REPAYMENT_TIME = 25;
const INITIAL_INTEREST_RATE = 6;

@Component({
  selector: 'mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.scss']
})
export class MortgageCalculatorComponent {
  formGroup: FormGroup<MortgageForm>;
  purchasePrice: number = INITIAL_PURCHASE_PRICE;

  constructor(
    private fb: NonNullableFormBuilder,
    private calculator: MortgageCalculatorService,
    private dialog: MatDialog
  ) {

    this.formGroup = this.fb.group({
      purchasePrice: this.fb.control(INITIAL_PURCHASE_PRICE),
      downPayment: this.fb.control(0),
      repaymentTime: this.fb.control(INITIAL_REPAYMENT_TIME),
      interestRate: this.fb.control(INITIAL_INTEREST_RATE),
      loanAmount: this.fb.control(INITIAL_PURCHASE_PRICE),
      paymentPerMonth: this.fb.control(0)
    })

    const payment = this.getMonthlyPayment();

    this.formGroup.patchValue({ paymentPerMonth: payment });

    this.formGroup.get('purchasePrice').valueChanges.subscribe((v: number) => {
      const amount = v - this.formGroup.get('downPayment').value;
      this.formGroup.patchValue({ loanAmount: amount });
    });

    this.formGroup.get('downPayment').valueChanges.subscribe((v: number) => {
      const amount = this.formGroup.get('purchasePrice').value - v;
      this.formGroup.patchValue({ loanAmount: amount });
    });

    this.formGroup.valueChanges.subscribe(() => {
      const payment = this.getMonthlyPayment();

      this.formGroup.patchValue(
        { paymentPerMonth: payment },
        { emitEvent: false }
      );
    });
  }

  private getMonthlyPayment(): number{
    const {purchasePrice, downPayment, repaymentTime, interestRate} = this.formGroup.getRawValue();
    const payment = this.calculator.calculateMonthlyPayment(purchasePrice, downPayment, interestRate, repaymentTime);
    return payment;
  }



  showMortgageQuoteDetails(): void {
    const details = this.formGroup.getRawValue() as MortgageDetails;
    this.dialog.open(MortgageQuoteDetailsComponent, { data: details });
  }
}
