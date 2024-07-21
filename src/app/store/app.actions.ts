import { Movie } from "../shared/models/movie.model";
import { UserInformation } from "../pages/login/models/login-information.model";

export class Login {
	static readonly type = '[APP] Login';
	constructor(public userInformation: UserInformation) { }
}

export class RateMovie {
	static readonly type = '[APP] Rate Movie';
	constructor(public newRate: number, public selectedMovie: Movie) { }
}
