import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {

  private _eventSubscription: Subscription;

  @ViewChild("header") header: ElementRef;

  private _top: number;

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
  }

  onScroll(event) {
    const scroll = window.pageYOffset;

    console.log(this._top)
    console.log(scroll);
    
    
    if (scroll >= this._top) {
      this.header.nativeElement.classList.add('snap');
    } else {
      this.header.nativeElement.classList.remove('snap');
    }
  }
  
}
