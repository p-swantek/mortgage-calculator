import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repaymentTime'
})
export class RepaymentTimePipe implements PipeTransform {

  transform(value: number): string {
    let yearStr = 'year'
    if (value > 1){
      yearStr = 'years'
    }
    return `${value} ${yearStr}`;
  }

}
