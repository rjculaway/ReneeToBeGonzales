import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SectionDirective } from './directives/section.directive';
import { GuestListComponent } from './components/guest-list/guest-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatRadioModule } from '@angular/material/radio';

import { environment } from 'src/environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RsvpService } from './services/rsvp.service';

@NgModule({
  declarations: [
    AppComponent,
    SectionDirective,
    GuestListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatRadioModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'reneetobegonzales'),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [RsvpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
