import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';

export class AppStateModel {
	public items: string[];
}

const defaults = {
	items: []
};

@State<AppStateModel>({
	name: 'appState',
	defaults
})
@Injectable()
export class AppState { }
