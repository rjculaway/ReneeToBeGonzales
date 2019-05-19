import { Routes, RouterModule }   from '@angular/router';
import { AppComponent } from '../app.component';


export const mainRoutes: Routes = [
    { path: '', component: AppComponent },
	{ path: ':code', component: AppComponent },
	{
		path: '',
		redirectTo: '/',
		pathMatch: 'full'
	}
];
export const mainRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(mainRoutes);