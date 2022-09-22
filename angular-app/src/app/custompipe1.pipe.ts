import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe1'
})
export class Custompipe1Pipe implements PipeTransform {
  countOfString: String = '';

  transform(value: String, ...args: String[]): any {
    this.countOfString = value;
    return this.countOfString.length;
  }

}
