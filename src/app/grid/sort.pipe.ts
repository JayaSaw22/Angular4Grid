import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  public order = 'asc';
  transform(value: any, args?: any): any {
   // console.log(value);
   // console.log(args);

    if (args) {
      if (this.order === 'asc') {
        value.sort((item1, item2) => {
          console.log('asc');
          return item1[args.column] === undefined
            ? 0
            : item1[args.column] > item2[args.column] ? -1 : 1;
        });
        this.order = 'desc';
      } else {
        value.sort((item1, item2) => {
          console.log('desc');
          return item1[args.column] === undefined
          ? 0
          : item1[args.column] < item2[args.column] ? -1 : 1;
        });
        this.order = 'asc';
      }
    }
    return value;
  }

}