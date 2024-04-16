interface ISignUpCommand {
	username: string,
	email: string,
	password: string,
}
export default class SignUpCommand {
	username: string;
	email: string;
	password: string;

	constructor(params: ISignUpCommand) {
		this.username = params.username;
		this.email = params.email;
		this.password = params.password;
	}
}
