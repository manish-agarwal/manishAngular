import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appArthdir]'
})
export class ArthdirDirective {

  constructor(private eRef: ElementRef) { 
    // this.eRef.nativeElement.style.color="cyan";
    // this.eRef.nativeElement.style.backgroundColor="grey";
    this.eRef.nativeElement.style.fontWeight="bold";
    this.eRef.nativeElement.style.fontSize="14px";
    this.eRef.nativeElement.style.borderRadius="14px";
  }

}
