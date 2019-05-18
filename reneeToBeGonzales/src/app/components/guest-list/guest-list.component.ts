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
      console.log(items)
      this.guestList = items;
    });
    // this.guestList = this._get()
    // .sort((a, b) => {
    //   if (a.name > b.name) {
    //       return 1;
    //   }
  
    //   if (a.name < b.name) {
    //       return -1;
    //   }
  
    //   return 0;
    // });
  }
  
  private _get(): any {
    //this.rsvpService.getAllGuests().valueChanges;
    return [{
        name: 'Maria Rosario Purugganan',
        going: true
      }, {
        name: 'Darah Umadac',
        going: false
      }, {
        name: 'Kyla Iglesia',
        going: false
      }, {
        name: 'Rogeross Berana',
        going: false
      }, {
        name: 'Jayson Valeroso',
        going: false
      }, {
        name: 'Ramonchito Bendijo',
        going: false
      }, {
        name: 'Aaron Sanchez',
        going: false
      }, {
        name: 'Aalvin Katigbak',
        going: false
      }, {
        name: 'Laarni Jan Laurente',
        going: false
      }, {
        name: 'Lea Lora Tadeo',
        going: false
      }, {
        name: 'Glen Laurente',
        going: false
      }, {
        name: 'Adrian Tadeo',
        going: false
      }, {
        name: 'Rene Jotham Culaway',
        going: false
      }, {
        name: 'Maria Franchesca Valle',
        going: false
      }];
  }
}
