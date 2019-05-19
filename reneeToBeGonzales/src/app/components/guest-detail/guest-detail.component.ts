import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route, ParamMap, ActivatedRouteSnapshot } from '@angular/router';
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

  constructor(private _route: ActivatedRoute,
    private _activatedRoute: ActivatedRoute,
    private _rsvpService: RsvpService) {
  }

  ngOnInit() {
  }
}
