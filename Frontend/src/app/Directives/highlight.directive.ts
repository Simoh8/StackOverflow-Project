import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[clickColor]',
  standalone: true,
})
export class ClickColorDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click') onClick() {
    this.el.nativeElement.style.color = 'red';
  }
}