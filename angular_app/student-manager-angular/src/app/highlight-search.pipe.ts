import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightSearch',
  standalone: true
})
export class HighlightSearchPipe implements PipeTransform {

  transform(value : string, searchPhrase : string): string {
    if(!searchPhrase)
      return value;

    const regex = new RegExp(searchPhrase,"ig");
    return value.replace(regex, (match)=> `<span class='highlight'>${match}</span>`);
  }

}
