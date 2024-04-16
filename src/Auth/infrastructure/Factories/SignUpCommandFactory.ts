import { Request } from 'express'
import InvalidCommandException from '../../../Shared/Exceptions/InvalidCommandException';
import SignUpCommand from '../../Application/Command/SignUpCommand';

export default class SignUpCommandFactory {

	static buildFromRequest = (req: Request) => {
		this.validateRequest(req);

		const username = req.body.username;
		const email = req.body.email;
		const password = req.body.password;

		return new SignUpCommand({ username: username, email: email, password: password });
	}

	static validateRequest = (req: Request) => {
		if (!req.body.email || !req.body.password || !req.body.username) {
			throw new InvalidCommandException('commande invalide !');
		}
	}
}
