import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { AppState } from 'src/app/store/app.state';
import { Movie } from 'src/app/shared/models/movie.model';
import { RateMovie } from 'src/app/store/app.actions';
import { Store } from '@ngxs/store';

@Component({
	selector: 'app-movie-card',
	templateUrl: './movie-card.component.html',
	styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit, OnDestroy {

	movies$: Observable<Movie[]> = inject(Store).select(AppState.movies);

	@Input() movies: Movie[];

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

	getColor(index: number, movieRate: number): string {
		return index > movieRate ? '#E0E0E0' : '#FFCA28'
	}

	rateMovie(index: number, ratedMovie: Movie): void {
		const newRate = index + 1;
		this.store.dispatch(new RateMovie(newRate, ratedMovie));
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}
