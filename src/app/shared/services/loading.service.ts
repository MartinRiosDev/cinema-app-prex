import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
	providedIn: 'root'
})
export class LoadingService {

	constructor(
		private loadingController: LoadingController
	) { }

	showLoading(message?: string) {
		this.loadingController.create({
			message: message || 'Loading...'
		}).then((loading) => loading.present())
	}

	hideLoading(): void {
		this.loadingController.dismiss();
	}
}
