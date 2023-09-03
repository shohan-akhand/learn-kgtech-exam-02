import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversion',
})
export class ConvertPipe implements PipeTransform {
  transform(value: number, ...args: any[]): any {
    if (!value) {
      return 0;
    } else if (value < 1048576) {
      const megabyte = value / 1024;
      return megabyte + 'MB';
    } else if (value > 1048576) {
      const gigabyte = value / 1048576;
      return gigabyte + 'GB';
    } else {
      throw new Error('Invalid Input');
    }
  }
}
