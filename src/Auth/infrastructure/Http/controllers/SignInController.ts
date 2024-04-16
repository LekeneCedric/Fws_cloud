import { Request, Response } from 'express';

const SignInController = async (req: Request, res: Response) => {

	res.status(200).send({ 'message': 'sign_in' })
};

export default SignInController;
