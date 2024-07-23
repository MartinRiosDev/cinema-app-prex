import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { AppState } from 'src/app/store/app.state';
import { Movie } from 'src/app/shared/models/movie.model';
import { Store } from '@ngxs/store';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.page.html',
	styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit, OnDestroy {

	//Selects
	movies$: Observable<Movie[]> = inject(Store).select(AppState.movies);

	//Misc
	movies: Movie[] = [];
	subscription: Subscription = new Subscription();

	constructor(
		private store: Store
	) { }

	ngOnInit(): void {
		this.subscription.add(
			this.movies$.subscribe((movies) => {
				this.movies = movies;
			})
		);
	}

	filterMovies(event: CustomEvent): void {
		const lowercaseValue = (event.detail.value as string).toLowerCase();
		const movies: Movie[] = this.store.snapshot().appState.movies;
		const filteredMovies = movies.filter((movie) => movie.description.toLowerCase().includes(lowercaseValue) || movie.title.toLowerCase().includes(lowercaseValue));
		this.movies = filteredMovies;
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}
