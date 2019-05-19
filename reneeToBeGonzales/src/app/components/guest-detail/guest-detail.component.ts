import { Component, OnInit, Input } from '@angular/core';

import { RsvpService } from 'src/app/services/rsvp.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-guest-detail',
  templateUrl: './guest-detail.component.html',
  styleUrls: ['./guest-detail.component.scss']
})
export class GuestDetailComponent implements OnInit {

  model: any;
  buttonText: string;
  private _snackbartText: string;
  @Input() code: string;

  constructor(private rsvpService: RsvpService, private snackbar: MatSnackBar) { }

  ngOnInit() {

    this.rsvpService.getById(this.code).subscribe(result => {
      this.model = result;
      this.setText(); 
    });
  }

  confirm(): void {
    this.rsvpService.confirmRsvp(this.code, this.model.isGoing).then(() => {
      this.openSnackBar();
    });
  }

  setText(): void {
    if (this.model && this.model.isGoing) {
      this.buttonText = "wouldn't miss it for the world";
      this._snackbartText = 'hooray!';
    } else {
      this.buttonText = 'will be there in spirit';
      this._snackbartText = 'awww...';
    }
  }
  
  openSnackBar() {
    this.snackbar.open(this._snackbartText, 'close', {
      duration: 2000,
      panelClass: ['snackbar', 'subtext']
    });
  }
}
