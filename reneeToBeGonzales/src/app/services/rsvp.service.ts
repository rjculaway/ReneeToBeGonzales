import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { GuestModel } from '../models/guest.model';
import { reject } from 'q';

@Injectable()
export class RsvpService {

    options: any;

    constructor(private db: AngularFirestore) {
    }

    getAllGuests() {
        return this.db.collection<GuestModel>('guests');
    }

    getById(id: string) {
        return this.db.doc<GuestModel>(`guests/${id}`).valueChanges();
    }

    confirmRsvp(id: string, isGoing: boolean) {
        return this.db.collection('guests').doc(id).update({ isGoing: isGoing });
    }
}
