import { Component } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie.model';
import { Store } from '@ngxs/store';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.page.html',
	styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {

	movies: Movie[] = [];

	constructor(
		private store: Store
	) { }

	filterMovies(event: CustomEvent): void {
		const lowercaseValue = (event.detail.value as string).toLowerCase();
		const movies: Movie[] = this.store.snapshot().appState.movies;
		const filteredMovies = movies.filter((movie) => movie.description.toLowerCase().includes(lowercaseValue) || movie.title.toLowerCase().includes(lowercaseValue));
		this.movies = filteredMovies;
	}
}
