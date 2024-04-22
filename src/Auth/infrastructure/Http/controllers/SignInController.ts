import { Request, Response } from 'express';
import SignInCommandFactory from '../../Factories/SignInCommandFactory';

interface ISignInResponse {

}
const SignInController = async (req: Request, res: Response) => {
	const httpResponse = {} as ISignInResponse

	try {
		const command = SignInCommandFactory.buildFromRequest(req);
	} catch() {

	}

	res.status(200).send(httpResponse);
};

export default SignInController;
