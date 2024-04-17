import User from '../../Domain/User';
import IUserRepository from '../../Domain/UserRepository';
import SignUpCommand from './SignUpCommand';
import SignUpResponse from './SignUpResponse';

export default class SignUpHandler {
	#repository: IUserRepository;

	constructor(repository: IUserRepository) {
		this.#repository = repository;
	}

	handle(command: SignUpCommand) {
		const response = new SignUpResponse();

		const user = User.create(command.username, command.email, command.password);
		this.#repository.create(user);

		response.isSaved = true;
		response.message = 'User create successfully !';
		response.user = { id: user.id(), email: command.email, username: command.username }
		return response;
	}
}
