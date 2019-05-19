import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appSection]'
})
export class SectionDirective implements AfterViewInit {

  elementRef: ElementRef;
  bottom: number;

  constructor(private _elementRef: ElementRef) {
    this.elementRef = _elementRef;
  }

  ngAfterViewInit(): void {
    this.bottom = this.elementRef.nativeElement.getBoundingClientRect().bottom;
  }



}
