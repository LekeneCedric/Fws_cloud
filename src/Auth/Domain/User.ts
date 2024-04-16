import bcrypt from 'bcrypt';
import { v4 as uuid4 } from 'uuid';

interface UserConstructor {
	id: string,
	username: string,
	email: string,
	password: string,
}
export default class User {
	#id: string;
	#username: string;
	#email: string;
	#password: string;

	private constructor(params: UserConstructor) {
		this.#id = params.id;
		this.#username = params.username;
		this.#email = params.email;
		this.#password = params.password
	}

	static create(username: string, email: string, password: string) {
		let hashedPassword: string = '';
		bcrypt.genSalt(10, function (err: Error | undefined, salt: string) {
			if (err) throw err;
			bcrypt.hash(password, salt, function (err: Error | undefined, hash: string) {
				if (err) throw err;
				hashedPassword = hash;
			})
		});
		return new this({ id: uuid4(), username: username, email: email, password: hashedPassword })
	}

	id(): string {
		return this.#id;
	}
}
