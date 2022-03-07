import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageQuoteDetailsComponent } from './mortgage-quote-details.component';

describe('MortgageQuoteDetailsComponent', () => {
  let component: MortgageQuoteDetailsComponent;
  let fixture: ComponentFixture<MortgageQuoteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MortgageQuoteDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageQuoteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
