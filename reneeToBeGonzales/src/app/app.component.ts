import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';

import { SectionDirective } from './directives/section.directive';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {

  showSubtext = false;
  private _eventSubscription: Subscription;

  @ViewChild("header") header: ElementRef;
  @ViewChildren(SectionDirective) sections: QueryList<SectionDirective>;

  private _top: number;
  private _sections = [];

  ngOnInit(): void {
    this._eventSubscription = fromEvent(window, "scroll").subscribe(event => {
                this.onScroll(event);
            });
  }

  ngOnDestroy(): void {
    if (this._eventSubscription){
      this._eventSubscription.unsubscribe();
    }
  }

  ngAfterViewInit(): void {
    this._top = this.header.nativeElement.getBoundingClientRect().top;

     this.sections.forEach(el => {
      this._sections.push({ 
        top: el.top,
        element: el.elementRef
      })
    });
  }

  onScroll(event) {
    const scroll = window.pageYOffset;
    const bottom = this.header.nativeElement.getBoundingClientRect().bottom;
    
    
    if (scroll >= this._top) {
      this.header.nativeElement.classList.add('snap');
      this.showSubtext = true;
    } else {
      this.header.nativeElement.classList.remove('snap');
      this.showSubtext = false;
    }


    this._sections.forEach((section, index) => {
      if ((bottom > Math.abs(section.top) && index !== 0) || (index === 0 && this.header.nativeElement.classList.contains('snap'))) {
        section.element.nativeElement.classList.add('static')
      } else {
        section.element.nativeElement.classList.remove('static')
      }
    })
  }
  
}
