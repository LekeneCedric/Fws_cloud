import User from '../../Domain/User';
import IUserRepository from '../../Domain/UserRepository';

export default class PdoUserRepository implements IUserRepository {
	save = (user: User) => {

	}
}
