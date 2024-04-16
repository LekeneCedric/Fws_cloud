import { Router } from 'express';
import SignInController from '../Http/controllers/SignInController';
import SignUpController from '../Http/controllers/SignUpController';

const authRoutes = Router();

authRoutes.post('/sign_in', SignInController);
authRoutes.post('/sign_up', SignUpController);

export default authRoutes;
