import { Component } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage {

	passwordIsVisible: boolean = false;

	changePasswordVisibility(): void {
		this.passwordIsVisible = !this.passwordIsVisible;
	}
}
