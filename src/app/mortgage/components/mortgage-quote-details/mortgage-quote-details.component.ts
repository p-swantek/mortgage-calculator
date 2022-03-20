import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MortgageDetails } from '../../mortgage-details';

@Component({
  selector: 'mortgage-quote-details',
  templateUrl: './mortgage-quote-details.component.html',
  styleUrls: ['./mortgage-quote-details.component.scss']
})
export class MortgageQuoteDetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public details: MortgageDetails) {}
}
