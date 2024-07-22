import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { LoadingService } from 'src/app/shared/services/loading.service';
import { Movie } from 'src/app/shared/models/movie.model';
import { Store } from '@ngxs/store';
import { ToastService } from 'src/app/shared/services/toast.service';
import { UpdateMovie } from 'src/app/store/app.actions';

@Component({
	selector: 'app-edit-movie',
	templateUrl: './edit-movie.page.html',
	styleUrls: ['./edit-movie.page.scss'],
})
export class EditMoviePage implements OnInit {

	selectedMovie: Movie = null;
	movieDescription: string = null;
	movieRate: number = null;

	constructor(
		private activatedRoute: ActivatedRoute,
		private store: Store,
		private router: Router,
		private loadingService: LoadingService,
		private toastService: ToastService
	) { }

	ngOnInit(): void {
		const selectedMovieId: number = Number(this.activatedRoute.snapshot.params['id']);
		this.selectedMovie = (this.store.snapshot().appState.movies as Movie[]).find(movie => movie.id === selectedMovieId);
		this.movieDescription = this.selectedMovie.description;
	}

	getColor(index: number, movieRate: number): string {
		return index > movieRate ? '#E0E0E0' : '#FFCA28'
	}

	rateMovie(rate: number): void {
		this.selectedMovie = {
			...this.selectedMovie,
			rate
		};
	}

	updateMovie(): void {
		if (!this.movieDescription) {
			return;
		}

		this.loadingService.showLoading('Saving changes...');
		setTimeout(() => {
			this.store.dispatch(new UpdateMovie(this.selectedMovie, this.selectedMovie.rate, this.movieDescription)).subscribe(() => {
				this.loadingService.hideLoading();
				this.toastService.showToast('Movie updated!', 'success-toast');
				this.router.navigate(['/dashboard']);
			});
		}, 3000);
	}
}
