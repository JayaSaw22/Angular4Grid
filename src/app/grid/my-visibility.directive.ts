import { Directive , HostBinding , HostListener} from '@angular/core';

@Directive({
  selector: '[appMyVisibility]'
})
export class MyVisibilityDirective {

  constructor() { }
  @HostBinding('class.appMyVisibility')
  IsFocused: boolean = false;

  @HostListener('mouseenter') onFocus() {
   this.IsFocused = true;
   console.log(true);
 }
 @HostListener('mouseleave') onFocusOut() {
   this.IsFocused = false;
 }
}
