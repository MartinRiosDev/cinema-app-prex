import { Action, Selector, State, StateContext } from '@ngxs/store';

import { Injectable } from '@angular/core';
import { Login } from './app.actions';
import { UserInformation } from '../pages/login/models/login-information.model';

export class AppStateModel {
	public user: UserInformation;
}

const defaults = {
	user: null
};

@State<AppStateModel>({
	name: 'appState',
	defaults
})
@Injectable()
export class AppState {

	@Selector()
	static user(state: AppStateModel): UserInformation {
		return state.user;
	}

	@Action(Login)
	storeUser(context: StateContext<AppStateModel>, action: Login): void {
		context.patchState({
			user: action.userInformation
		});
	}
}
