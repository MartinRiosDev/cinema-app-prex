import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
	providedIn: 'root'
})
export class ToastService {

	constructor(
		private toastController: ToastController
	) { }

	showToast(message: string, customClass?: string) {
		this.toastController.create({
			message: message,
			duration: 2000,
			position: 'bottom',
			buttons: [
				{
					text: 'Dismiss',
					role: 'cancel'
				}
			],
			cssClass: customClass
		}).then((toast) => toast.present());
	}
}
