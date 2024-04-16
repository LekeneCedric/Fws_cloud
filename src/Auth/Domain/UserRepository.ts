import User from './User';

export default interface IUserRepository {
	save(user: User): void
}
