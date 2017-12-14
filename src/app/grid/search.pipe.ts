import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  constructor() {
  //  console.log('I am called');
  }
  transform(data: Array<any>, args?: any): Array<any> {
    if (!data || !args) {
      return data
    }
    const result = [];
    data.filter((item) => {
      for (const x in item) {
        if (x) {
          if (item[x].toString().toLowerCase().indexOf(args.toString().toLowerCase()) !== -1) {
            result.push(item);
            break;
          }
        }
      }
    })
    return result;
  }

}
