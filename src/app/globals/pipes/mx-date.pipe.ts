import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mxDate'
})
export class MxDatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

    const date = new Date(value);
    const dateStr = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`; // 15/10/1980

    return dateStr;
  }

}
