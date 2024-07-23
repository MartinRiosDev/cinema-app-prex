import { Component, Input } from '@angular/core';
import { DeleteMovie, UpdateMovie } from 'src/app/store/app.actions';

import { AlertController } from '@ionic/angular';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { Movie } from 'src/app/shared/models/movie.model';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
	selector: 'app-movie-card',
	templateUrl: './movie-card.component.html',
	styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {

	@Input() movie: Movie;

	constructor(
		private store: Store,
		private router: Router,
		private loadingService: LoadingService,
		private toastService: ToastService,
		private alertController: AlertController
	) { }

	getColor(index: number, movieRate: number): string {
		return index > movieRate ? '#E0E0E0' : '#FFCA28'
	}

	rateMovie(rate: number, ratedMovie: Movie): void {
		this.store.dispatch(new UpdateMovie(ratedMovie, rate));
	}

	editMovie(movieId: number): void {
		this.router.navigate([`/edit-movie/${movieId}`]);
	}

	async openConfirmationAlert(movieId: number) {
		const alert = await this.alertController.create({
			header: 'Warning!',
			message: 'Are you sure you want to delete this movie?',
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel'
				},
				{
					text: 'Confirm',
					role: 'confirm',
					handler: () => {
						this.deleteMovie(movieId);
					},
				}
			],
			cssClass: 'custom-modal'
		});

		await alert.present();
	}

	deleteMovie(movieId: number): void {
		this.loadingService.showLoading('Deleting movie...');

		setTimeout(() => {
			this.store.dispatch(new DeleteMovie(movieId)).subscribe(() => {
				this.loadingService.hideLoading();
				this.toastService.showToast('Movie deleted successfully!', 'success-toast');
			});
		}, 3000);
	}
}
