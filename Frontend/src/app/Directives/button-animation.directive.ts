import { Directive, HostBinding, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Directive({
  selector: '[appButtonAnimation]',
  standalone: true,
})
export class ButtonAnimationDirective {
  @HostBinding('@buttonAnimation') animationState = 'normal';

  @HostListener('click') toggleAnimationState() {
    this.animationState = this.animationState === 'normal' ? 'clicked' : 'normal';
  }

  @HostListener('mouseleave') resetAnimationState() {
    this.animationState = 'normal';
  }

  @HostBinding('style.cursor') cursor = 'pointer';

  @HostBinding('style.display') display = 'inline-block';

  @HostBinding('style.transition') transition = 'transform 0.1s ease-in-out';

  @HostBinding('style.transform-origin') transformOrigin = 'center center';

  @HostBinding('style.will-change') willChange = 'transform';

  @HostBinding('style.user-select') userSelect = 'none';

  @HostBinding('style.outline') outline = 'none';

  @HostBinding('style.border') border = 'none';

  @HostBinding('style.background-color') backgroundColor = '#33A6FF';

  @HostBinding('style.padding') padding = '1px';

  @HostBinding('style.margin') margin = '1px';

  @HostBinding('style.border-radius') borderRadius = '5px';

  @HostBinding('style.font-weight') fontWeight = 'bold';

  @HostBinding('style.text-align') textAlign = 'center';

  @HostBinding('style.font-size') fontSize = '0.8rem';

  @HostBinding('style.color') color = '#fff';

  // @HostBinding('style.box-shadow') boxShadow = '1px 1px 5px rgba(0, 0, 0, 0.3)';

  @HostBinding('style.min-width') minWidth = '3rem';

  constructor() {}
  
  @HostBinding('style.transform')
  get transform(): string {
    return this.animationState === 'clicked' ? 'scale(1.2)' : 'scale(1)';
  }
  
  @HostBinding('attr.role')
  get role(): string {
    return 'button';
  }
  
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (event.code === 'Enter' || event.code === 'Space') {
      event.preventDefault();
      this.toggleAnimationState();
    }
  }

  @HostListener('keyup', ['$event'])
  onKeyUp(event: KeyboardEvent): void {
    if (event.code === 'Enter' || event.code === 'Space') {
      event.preventDefault();
      this.toggleAnimationState();
    }
  }
  
  @HostListener('blur')
  onBlur(): void {
    this.resetAnimationState();
  }
}
