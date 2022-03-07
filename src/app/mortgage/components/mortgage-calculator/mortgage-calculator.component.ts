import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSliderChange } from '@angular/material/slider';
import { filter, map, merge } from 'rxjs';
import { MortgageCalculatorService } from '../../mortgage-calculator.service';
import { MortgageQuoteDetailsComponent } from '../mortgage-quote-details/mortgage-quote-details.component';
import { MortgageDetails } from '../../mortgage-params';

@Component({
  selector: 'mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.scss']
})
export class MortgageCalculatorComponent{
  formGroup: FormGroup;
  purchasePrice: number;
  repaymentTime: number;
  interestRate: number;

  constructor(private fb: FormBuilder, private calculator: MortgageCalculatorService, private dialog: MatDialog) {
    this.purchasePrice = 200000;
    this.repaymentTime = 25;
    this.interestRate = 6;
    this.formGroup = this.fb.group({
      purchasePrice: [this.purchasePrice],
      downPayment: [0],
      repaymentTime: [this.repaymentTime],
      interestRate: [this.interestRate],
      loanAmount: [this.purchasePrice],
      paymentPerMonth: ['']
    },);
    this.formGroup.disable();
    let payment = this.calculator.calculateMonthlyPayment(this.purchasePrice, 0, this.interestRate, this.repaymentTime);

    this.formGroup.patchValue({paymentPerMonth: payment});

    this.formGroup.get('purchasePrice')!.valueChanges.subscribe((v: number) => {
      let amount = v - this.formGroup.get('downPayment')!.value;
      this.formGroup.patchValue({loanAmount: amount})
    });

    this.formGroup.get('downPayment')!.valueChanges.subscribe((v: number) => {
      let amount = this.formGroup.get('purchasePrice')!.value - v;
      this.formGroup.patchValue({loanAmount: amount})
    });

    this.formGroup.valueChanges.subscribe(_ => {
      let purchasePrice = this.formGroup.get('purchasePrice')?.value;
      let downPayment = this.formGroup.get('downPayment')?.value;
      let time = this.formGroup.get('repaymentTime')?.value;
      let rate = this.formGroup.get('interestRate')?.value;
      let payment = this.calculator.calculateMonthlyPayment(purchasePrice, downPayment, rate, time);
      this.formGroup.patchValue({paymentPerMonth: payment}, {emitEvent: false});
    })
  }


  purchasePriceChanged(event: MatSliderChange): void{
    this.formGroup.patchValue({'purchasePrice': event.value})
  }

  downPaymentChanged(event: MatSliderChange): void{
    this.formGroup.patchValue({'downPayment': event.value})
  }

  repaymentTimeChanged(event: MatSliderChange): void{
    this.formGroup.patchValue({'repaymentTime': event.value})
  }

  interestRateChanged(event: MatSliderChange): void{
    this.formGroup.patchValue({'interestRate': event.value})
  }

  showMortgageQuoteDetails(): void{
    let details = this.formGroup.value as MortgageDetails;
    this.dialog.open(MortgageQuoteDetailsComponent,  {data: details});
  }

}
