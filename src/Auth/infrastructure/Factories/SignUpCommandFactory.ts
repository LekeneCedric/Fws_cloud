import { Request } from 'express'
import bcrypt from 'bcrypt';
import InvalidCommandException from '../../../Shared/Exceptions/InvalidCommandException';
import SignUpCommand from '../../Application/Command/SignUpCommand';

export default class SignUpCommandFactory {

	static buildFromRequest = async (req: Request) => {
		this.validateRequest(req);

		const username = req.body.username;
		const email = req.body.email;
		const password = await bcrypt.hash(req.body.password, 10);

		return new SignUpCommand({ username: username, email: email, password: password });
	}

	static validateRequest = (req: Request) => {
		if (!req.body.email || !req.body.password || !req.body.username) {
			throw new InvalidCommandException('commande invalide !');
		}
	}
}
