import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent {

	sideMenuButtons = [{ title: 'Logout', icon: 'log-out' }];

	constructor() { }
}
