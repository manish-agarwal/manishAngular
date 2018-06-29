import { Directive, ElementRef, OnInit,Renderer,HostListener,HostBinding,Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
	
@Input() defaultColor:string ='lightgrey';
@Input('appBetterHighlight') highlightColor : string = 'black';
@HostBinding('style.backgroundColor') backgroundColor:string; 
@HostBinding('style.color') color:string;
@HostBinding('style.display') disp:string; 
constructor(private elRef: ElementRef,private renderer : Renderer) {
   }

ngOnInit(){
  
  	this.backgroundColor=this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor=this.highlightColor;
    this.color='cyan';
  }

  @HostListener('mouseleave') mouseleave(eventData:Event) {
    this.backgroundColor=this.defaultColor;
    this.color='black';
    this.disp='none';
    //upi
  }
} 