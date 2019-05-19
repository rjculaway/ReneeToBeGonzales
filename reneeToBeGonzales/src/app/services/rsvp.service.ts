import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { GuestModel } from '../models/guest.model';
import { Observable } from 'rxjs';

@Injectable()
export class RsvpService {

    constructor(private db: AngularFirestore) {
    }

    getAllGuests() {
        return this.db.collection<GuestModel>('guests');
    }

    getById(id: string): Observable<GuestModel> {
        return this.db.doc<GuestModel>(`guests/${id}`).valueChanges();
    }

    confirmRsvp(id: string, isGoing: boolean) {
        return this.db.collection('guests').doc(id).update({ isGoing: isGoing });
    }
}
