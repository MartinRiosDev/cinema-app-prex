import { Action, Selector, State, StateContext } from '@ngxs/store';

import { Injectable } from '@angular/core';
import { Login } from './app.actions';
import { Movie } from '../shared/models/movie.model';
import { UserInformation } from '../pages/login/models/login-information.model';
import { defaultMovies } from '../shared/constants';

export class AppStateModel {
	public user: UserInformation;
	public movies: Movie[];
}

const defaults = {
	user: null,
	movies: [...defaultMovies]
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

	@Selector()
	static movies(state: AppStateModel): Movie[] {
		return state.movies;
	}

	@Action(Login)
	storeUser(context: StateContext<AppStateModel>, action: Login): void {
		context.patchState({
			user: action.userInformation
		});
	}
}
