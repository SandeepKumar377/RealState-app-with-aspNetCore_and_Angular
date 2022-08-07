import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, propName: string): any {
    try{

      const resultArray=[];
      if (value.length===0 || filterString==='' || propName==='' ) {
        return value;
      }
      for (const item of value) {
        if (item[propName]===filterString) {
          resultArray.push(item);
        }
        return resultArray;
      }
    }catch(error){
      console.log(error);
    }
  }
}
