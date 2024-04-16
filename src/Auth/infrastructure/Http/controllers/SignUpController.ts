import { Request, Response } from 'express';
import SignUpCommandFactory from '../../Factories/SignUpCommandFactory';
import InvalidCommandException from '../../../../Shared/Exceptions/InvalidCommandException';
import SignUpHandler from '../../../Application/Command/SignUpHandler';
import PdoUserRepository from '../../Repositories/PdoUserRepository';
import { TechnicalErrors } from '../../../../Shared/TechnicalErrors';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

type SignUpResponse = {
	status: boolean,
	message: string,
	isSaved: boolean,
	user?: { email: string, username: string }
	token: string,
}
const SignUpController = async (req: Request, res: Response) => {
	const httpResponse = {
		status: false,
		message: '',
		isSaved: false,
		token: '',
	} as SignUpResponse;

	try {
		const command = SignUpCommandFactory.buildFromRequest(req);
		const response = new SignUpHandler(new PdoUserRepository()).handle(command);
		const token = jwt.sign(
			{ username: response.user?.username, userId: response.user?.id },
			process.env.JWT_PRIVATE_KEY!,
			{ expiresIn: 60 * 60 },
		);
		httpResponse.message = response.message;
		httpResponse.status = true;
		httpResponse.isSaved = response.isSaved;
		httpResponse.user = response.user;
		httpResponse.token = token;
	} catch (error: any) {
		if (error instanceof InvalidCommandException) {
			httpResponse.message = error.message;
		} else {
			httpResponse.message = error.message;
		}
	}
	res.status(200).send(httpResponse);
};

export default SignUpController;
