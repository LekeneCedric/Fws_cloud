import bcrypt from 'bcrypt';
import { v4 as uuid4 } from 'uuid';
import DateVo from '../../Shared/VO/DateVo';

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
	#createdAt?: DateVo;

	private constructor(params: UserConstructor) {
		this.#id = params.id;
		this.#username = params.username;
		this.#email = params.email;
		this.#password = params.password;
	}

	static create(username: string, email: string, password: string) {
		const newUser = new this({ id: uuid4(), username: username, email: email, password: password });
		newUser.#createdAt = new DateVo();
		return newUser;
	}

	id(): string {
		return this.#id;
	}

	toDocument(): Object {
		return {
			username: this.#username,
			email: this.#email,
			password: this.#password,
			created_at: this.#createdAt?.value
		}
	}
}
