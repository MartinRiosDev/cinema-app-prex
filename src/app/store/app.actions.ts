import { Movie } from "../shared/models/movie.model";
import { UserInformation } from "../pages/login/models/login-information.model";

export class Login {
	static readonly type = '[APP] Login';
	constructor(public userInformation: UserInformation) { }
}

export class UpdateMovie {
	static readonly type = '[APP] Rate Movie';
	constructor(public selectedMovie: Movie, public newRate: number, public newDescription?: string) { }
}
