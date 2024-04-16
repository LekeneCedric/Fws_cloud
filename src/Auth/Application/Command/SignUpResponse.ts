export default class SignUpResponse {
	message: string = '';
	isSaved: boolean = false;
	user?: { id: string, email: string, username: string };
}
