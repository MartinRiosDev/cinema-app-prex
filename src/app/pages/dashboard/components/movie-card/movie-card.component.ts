import { Component, inject } from '@angular/core';

import { AppState } from 'src/app/store/app.state';
import { Movie } from 'src/app/shared/models/movie.model';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';

@Component({
	selector: 'app-movie-card',
	templateUrl: './movie-card.component.html',
	styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {

	movies$: Observable<Movie[]> = inject(Store).select(AppState.movies);

	getColor(index: number, movieRate: number): string {
		return index > movieRate ? '#E0E0E0' : '#FFCA28'
	}
}
