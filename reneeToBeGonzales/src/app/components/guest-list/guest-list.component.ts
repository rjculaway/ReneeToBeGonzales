import { Component, OnInit } from '@angular/core';
import { RsvpService } from 'src/app/services/rsvp.service';
import { GuestModel } from 'src/app/models/guest.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.scss']
})
export class GuestListComponent implements OnInit {

  guestList: any;
  selected: any;

  constructor(private rsvpService: RsvpService) { }

  ngOnInit() {
    this.guestList = this.rsvpService.getAllGuests().snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as GuestModel;
        data.lastName = data.fullName.split(/[ ]+/).pop();
        const id = a.payload.doc.id;

        return { id, ...data };
      }))
    );
    this.guestList.subscribe(result => {
      let csv = '';

      result.forEach(element => {
        csv += `${ element.id }, ${ element.fullName }:`
      });
      console.log(csv)
    })
  }
  
  test() {
    this.rsvpService.getById(this.selected.id).subscribe(guest => {
      console.log(guest);
    });
  }
}
