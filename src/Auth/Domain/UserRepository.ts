import User from './User';

export default interface IUserRepository {
	create(user: User): void
}
