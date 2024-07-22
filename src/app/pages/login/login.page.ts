import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { IonModal } from '@ionic/angular';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { Login } from 'src/app/store/app.actions';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { ToastService } from 'src/app/shared/services/toast.service';
import { finalize } from 'rxjs';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	@ViewChild(IonModal) modal: IonModal;

	form: UntypedFormGroup;

	constructor(
		private fb: UntypedFormBuilder,
		private store: Store,
		private router: Router,
		private loadingService: LoadingService,
		private toastService: ToastService
	) { }

	ngOnInit(): void {
		this.initForm();
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
		this.loadingService.showLoading('Loggin in...');

		/**
		 * I use this setTimeout to simulate the response time of a call to the backend.
		 * This same criteria will be used throughout the application.
		 */
		setTimeout(() => {
			this.store.dispatch(new Login(this.form.getRawValue()))
				.pipe(finalize(() => this.form.enable()))
				.subscribe({
					next: () => {
						this.loadingService.hideLoading();
						this.router.navigate(['/dashboard']);
					}
				});
		}, 3000);
	}

	recoverPassword(): void {
		this.loadingService.showLoading('Recovering your password...');

		setTimeout(() => {
			this.loadingService.hideLoading();
			this.modal.dismiss();
			this.toastService.showToast('Done! Please check your mailbox.', 'success-toast');
		}, 3000);
	}

	ionViewWillLeave(): void {
		this.form.reset();
	}
}
