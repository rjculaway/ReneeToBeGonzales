import { Routes, RouterModule }   from '@angular/router';
import { AppComponent } from '../app.component';


export const mainRoutes: Routes = [
    { path: 'home', component: AppComponent },
	{ path: 'home/:code', component: AppComponent },
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	}
];
export const mainRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(mainRoutes);