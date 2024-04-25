import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTransform',
  standalone: true
})
export class TextTransformPipe implements PipeTransform {

  transform(value: string): string {
    let result = "";
    for (let i = 0; i < value.length; i++) {
      result += i % 2 === 0 ? value[i].toUpperCase() : value[i].toLowerCase();
    }
    return result;
  }

}
