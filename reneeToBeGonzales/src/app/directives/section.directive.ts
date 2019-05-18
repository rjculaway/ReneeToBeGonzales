import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appSection]'
})
export class SectionDirective implements AfterViewInit {

  elementRef: ElementRef;
  top: number;

  constructor(private _elementRef: ElementRef) {
    this.elementRef = _elementRef;
  }

  ngAfterViewInit(): void {
    this.top = this.elementRef.nativeElement.getBoundingClientRect().top;
  }



}
