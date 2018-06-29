import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appTabledir]'
})
export class TabledirDirective {

  constructor(private eref: ElementRef) {
    this.eref.nativeElement.style.backgroundColor="cyan";
    this.eref.nativeElement.style.borderSpacing="5px";
   }

}
