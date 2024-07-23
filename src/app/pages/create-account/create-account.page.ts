import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { clearFormStatus, regEx } from 'src/app/shared/constants';

import { IAbstractControl } from 'src/app/shared/models/abstract-control.model';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
	selector: 'app-create-account',
	templateUrl: './create-account.page.html',
	styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {

	form: UntypedFormGroup;

	constructor(
		private fb: UntypedFormBuilder,
		private toastService: ToastService,
		private loadingService: LoadingService,
		private router: Router
	) { }

	get controls(): IAbstractControl {
		return this.form.controls;
	}

	get emailErrorText(): string {
		if (this.controls['email'].hasError('required')) {
			return 'Email is required';
		} else if (this.controls['email'].hasError('pattern')) {
			return 'Please enter a valid email';
		}

		return '';
	}

	ngOnInit(): void {
		this.initForm();
	}

	ionViewWillEnter(): void {
		clearFormStatus(this.form);
	}

	initForm(): void {
		this.form = this.fb.group({
			username: [null, [Validators.required]],
			email: [null, [Validators.required, Validators.pattern(regEx.email)]],
			password: [null, [Validators.required]],
			confirmPassword: [null, [Validators.required]]
		});
	}

	submit(): void {
		if (this.form.invalid) {
			this.form.markAllAsTouched();
			return;
		}

		if (this.controls['password'].value !== this.controls['confirmPassword'].value) {
			this.toastService.showToast('The passwords do not match!', 'error-toast');
			return;
		}

		this.loadingService.showLoading('Creating account...');

		setTimeout(() => {
			this.router.navigate(['/login']);
			this.loadingService.hideLoading();
			this.toastService.showToast('Account created! Please log in with your new credentials.', 'success-toast');
		}, 3000);
	}

	ionViewWillLeave(): void {
		this.form.reset();
	}
}
