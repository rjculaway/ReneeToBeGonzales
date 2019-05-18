import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { GuestModel } from '../models/guest.model';
 
@Injectable()
export class RsvpService {
    
    options: any;

    constructor(private db: AngularFirestore) {
    }

    getAllGuests() {
        return this.db.collection('guests').valueChanges();
    }

    confirmRsvp(name: string) {
        //return this.httpClient.post(`/confirm/${name}`, this.options);
    }
}
