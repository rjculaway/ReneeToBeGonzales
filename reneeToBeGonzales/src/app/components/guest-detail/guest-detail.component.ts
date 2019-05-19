import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { RsvpService } from 'src/app/services/rsvp.service';
import { GuestModel } from 'src/app/models/guest.model';

@Component({
  selector: 'app-guest-detail',
  templateUrl: './guest-detail.component.html',
  styleUrls: ['./guest-detail.component.scss']
})
export class GuestDetailComponent implements OnInit {

  model: any;

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute, private _rsvpService: RsvpService) { }

  ngOnInit() {

    console.log(this._activatedRoute.snapshot.params['code']);
    this._activatedRoute.params.subscribe(params => {
      console.log(params['code']);
      this._rsvpService.getById(params['code']).subscribe(result => {
        console.log(result);
       
      })
    });
  }

}
