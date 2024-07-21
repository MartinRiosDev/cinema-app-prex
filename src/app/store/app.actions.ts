import { UserInformation } from "../pages/login/models/login-information.model";

export class Login {
	static readonly type = '[APP] Login';
	constructor(public userInformation: UserInformation) { }
}
