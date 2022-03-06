import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSliderChange } from '@angular/material/slider';
import { filter, map, merge } from 'rxjs';
import { MortgageCalculatorService } from '../../mortgage-calculator.service';

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

  constructor(private fb: FormBuilder, private calculator: MortgageCalculatorService) {
    this.purchasePrice = 200000;
    this.repaymentTime = 25;
    this.interestRate = 6;
    this.formGroup = this.fb.group({
      purchasePrice: [this.purchasePrice],
      downPayment: [100000],
      repaymentTime: [this.repaymentTime],
      interestRate: [this.interestRate],
      loanAmount: [this.purchasePrice],
      paymentPerMonth: ['']
    },);
    this.formGroup.disable();
    let payment = this.calculator.calculateMonthlyPayment(this.purchasePrice, 100000, this.interestRate, this.repaymentTime);

    this.formGroup.patchValue({paymentPerMonth: payment}, {emitEvent: false});

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

}
