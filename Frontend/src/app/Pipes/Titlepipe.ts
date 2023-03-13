import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase',
  standalone: true,
})
export class TitleCasePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    
    const words = value.toLowerCase().split(' ');
    
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      
      if (i > 0 && this.isSmallWord(word)) {
        words[i] = word.toLowerCase();
      } else {
        words[i] = this.capitalize(word);
      }
    }
    
    return words.join(' ');
  }
  
  private isSmallWord(word: string): boolean {
    const smallWords = ['a', 'an', 'and', 'as', 'at', 'but', 'by', 'en', 'for', 'if', 'in', 'nor', 'of', 'on', 'or', 'per', 'the', 'to', 'vs'];
    
    return smallWords.includes(word);
  }
  
  private capitalize(word: string): string {
    return word.substr(0, 1).toUpperCase() + word.substr(1);
  }
}
