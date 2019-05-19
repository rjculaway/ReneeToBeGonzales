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

  constructor(private _router: Router, private _route: Route) { }

  ngOnInit() {
  }

}
