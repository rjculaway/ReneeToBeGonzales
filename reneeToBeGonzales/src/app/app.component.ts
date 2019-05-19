import {  
  Component, 
  OnInit, 
  OnDestroy, 
  AfterViewInit, 
  ViewChild, 
  QueryList, 
  ViewChildren, 
  ElementRef 
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

import { Subscription, fromEvent } from 'rxjs';
import { SectionDirective } from './directives/section.directive';

import { RsvpService } from 'src/app/services/rsvp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('snap', [
      state('no', style({
        background: 'rgba(221, 192, 184, 0)'})
      ),
      state('yes', style({
        background: 'rgba(221, 192, 184, .3)'})
      ),
      transition('no <=> yes', [
        animate('1s')
      ])
    ]),
    trigger('fadeIn', [
      state('no', style({
        opacity: 0
      })),
      state('yes', style({
        opacity: 1
      })),
      transition('* => yes', [
        animate('.5s')
      ]),
      transition('yes => no', [
        animate('.5s')
      ])
    ])
  ]
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {

  snap = '';
  fadeIn = '';
  private _eventSubscription: Subscription;

  @ViewChild("header") header: ElementRef;
  @ViewChildren(SectionDirective) sections: QueryList<SectionDirective>;

  private _bottom: number;
  private _sections = [];

  constructor(private _activatedRoute: ActivatedRoute, private _rsvpService: RsvpService) { }

  ngOnInit(): void {
    this._eventSubscription = fromEvent(window, "scroll").subscribe(event => {
        this.onScroll(event);
    });
    
    console.log(this._activatedRoute.snapshot.params['code']);
    this._activatedRoute.params.subscribe(params => {
      console.log(params['code']);
      this._rsvpService.getById(params['code']).subscribe(result => {
        console.log(result);
       
      })
    });
  }

  ngOnDestroy(): void {
    if (this._eventSubscription){
      this._eventSubscription.unsubscribe();
    }
  }

  ngAfterViewInit(): void {
    this._bottom = this.header.nativeElement.getBoundingClientRect().top;

     this.sections.forEach(el => {
      this._sections.push({ 
        top: el.bottom,
        element: el.elementRef
      })
    });
  }

  onScroll(event) {
    const scroll = window.pageYOffset;
    const bottom = this.header.nativeElement.getBoundingClientRect().bottom;
    
    
    if (scroll >= this._bottom) {
      this.header.nativeElement.classList.add('snap');
      this.snap = 'yes';
      this.fadeIn = 'yes';
    } else {
      this.header.nativeElement.classList.remove('snap');
      this.snap = 'no';
    }

    this._sections.forEach((section, index) => {
      if ((bottom > Math.abs(section.bottom) && index !== 0) || (index === 0 && this.header.nativeElement.classList.contains('snap'))) {
        section.element.nativeElement.classList.add('static')
      } else {
        section.element.nativeElement.classList.remove('static')
      }
    })
  }
  
}
