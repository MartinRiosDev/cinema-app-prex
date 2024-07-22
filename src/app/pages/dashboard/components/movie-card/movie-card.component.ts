import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { AppState } from 'src/app/store/app.state';
import { Movie } from 'src/app/shared/models/movie.model';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { UpdateMovie } from 'src/app/store/app.actions';

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
		private store: Store,
		private router: Router
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

	rateMovie(rate: number, ratedMovie: Movie): void {
		this.store.dispatch(new UpdateMovie(ratedMovie, rate));
	}

	editMovie(movieId: number): void {
		this.router.navigate([`/edit-movie/${movieId}`]);
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}
