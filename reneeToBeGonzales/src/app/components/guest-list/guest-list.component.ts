import { Component, OnInit } from '@angular/core';
import { RsvpService } from 'src/app/services/rsvp.service';

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
      
      this.guestList = items.map(item => {
        return {
          fullName: item.fullName,
          lastName: item.fullName.split(/[ ]+/).pop(),
          isGoing: item.isGoing
        }
      }).sort((a, b) => {
        if (a.lastName > b.lastName) {
            return 1;
        }
    
        if (a.lastName < b.lastName) {
            return -1;
        }
    
        return 0;
      });
    });
  }
}
