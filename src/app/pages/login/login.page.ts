import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { LoadingController } from '@ionic/angular';
import { Login } from 'src/app/store/app.actions';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { finalize } from 'rxjs';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	form: UntypedFormGroup;
	passwordIsVisible: boolean = false;

	constructor(
		private fb: UntypedFormBuilder,
		private store: Store,
		private router: Router,
		private loadingController: LoadingController
	) { }

	changePasswordVisibility(): void {
		this.passwordIsVisible = !this.passwordIsVisible;
	}

	ngOnInit(): void {
		this.initForm();
	}

	async showLoading() {
		const loading = await this.loadingController.create({
			message: 'Logging in...'
		});

		loading.present();
	}

	initForm(): void {
		this.form = this.fb.group({
			username: [null, [Validators.required]],
			password: [null, [Validators.required]]
		});
	}

	submit(): void {
		if (this.form.invalid) {
			this.form.markAllAsTouched();
			return;
		}

		this.form.disable();
		this.showLoading();

		/**
		 * I use this setTimeout to simulate the response time of a call to the backend.
		 * This same criteria will be used throughout the application.
		 */
		setTimeout(() => {
			this.store.dispatch(new Login(this.form.getRawValue()))
				.pipe(finalize(() => this.form.enable()))
				.subscribe({
					next: () => {
						this.loadingController.dismiss();
						this.router.navigate(['/dashboard']);
					}
				});
		}, 3000);
	}

	ionViewWillLeave(): void {
		this.form.reset();
	}
}
