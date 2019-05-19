import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, ActivatedRouteSnapshot } from '@angular/router';

import { AppComponent } from './app.component';
import { SectionDirective } from './directives/section.directive';
import { GuestListComponent } from './components/guest-list/guest-list.component';
import { GuestDetailComponent } from './components/guest-detail/guest-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

import { environment } from 'src/environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RsvpService } from './services/rsvp.service';
import { mainRoutingProviders, routing } from './root/main.route';
import { RootComponent } from './root/root.component';

@NgModule({
	declarations: [
		AppComponent,
		SectionDirective,
		GuestListComponent,
		GuestDetailComponent,
		RootComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		MatRadioModule,
		MatButtonModule,
		FormsModule,
		AngularFireModule.initializeApp(environment.firebase, 'reneetobegonzales'),
		AngularFirestoreModule, // imports firebase/firestore, only needed for database features
		AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
		AngularFireStorageModule, // imports firebase/storage only needed for storage features
		routing,
		mainRoutingProviders
	],
	providers: [RsvpService],
	bootstrap: [RootComponent]
})
export class AppModule { }
