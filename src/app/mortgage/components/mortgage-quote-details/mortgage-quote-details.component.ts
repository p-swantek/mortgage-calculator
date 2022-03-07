import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MortgageDetails } from '../../mortgage-params';

@Component({
  selector: 'mortgage-quote-details',
  templateUrl: './mortgage-quote-details.component.html',
  styleUrls: ['./mortgage-quote-details.component.scss']
})
export class MortgageQuoteDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public details: MortgageDetails) { }

  ngOnInit(): void {
  }

}
