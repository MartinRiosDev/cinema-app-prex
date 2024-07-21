import { Component, inject } from '@angular/core';
import { Select, Store } from '@ngxs/store';

import { AppState } from './store/app.state';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { StateReset } from 'ngxs-reset-plugin';
import { UserInformation } from './pages/login/models/login-information.model';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent {

	user$: Observable<UserInformation> = inject(Store).select(AppState.user);

	constructor(
		private store: Store,
		private router: Router
	) { }

	logout(): void {
		this.store.dispatch(new StateReset(AppState)).subscribe(() => {
			localStorage.clear();
			this.router.navigate(['/login']);
		});
	}
}
