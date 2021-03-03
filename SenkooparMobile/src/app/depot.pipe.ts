import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'depot'
})
export class DepotPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
