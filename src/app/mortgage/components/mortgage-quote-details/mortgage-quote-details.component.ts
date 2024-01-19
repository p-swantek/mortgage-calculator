import { Component, Inject } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { MortgageDetails } from '../../mortgage-details';

@Component({
  selector: 'mortgage-quote-details',
  templateUrl: './mortgage-quote-details.component.html',
  styleUrls: ['./mortgage-quote-details.component.scss']
})
export class MortgageQuoteDetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public details: MortgageDetails) {}
}
