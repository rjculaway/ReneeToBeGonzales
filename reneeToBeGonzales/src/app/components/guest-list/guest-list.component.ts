import { Component, OnInit } from '@angular/core';
import { RsvpService } from 'src/app/services/rsvp.service';
import { GuestModel } from 'src/app/models/guest.model';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.scss']
})
export class GuestListComponent implements OnInit {

  guestList = [{}];
  selected: any;

  constructor(private rsvpService: RsvpService) { }

  ngOnInit() {
    this.rsvpService.getAllGuests().subscribe(items => {
      this.guestList = items.sort((a: GuestModel, b: GuestModel) => {
        if (a.fullName > b.fullName) {
            return 1;
        }
    
        if (a.fullName < b.fullName) {
            return -1;
        }
    
        return 0;
      });
    });
  }
}
