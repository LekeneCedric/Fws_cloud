import { Collection } from 'mongodb';
import User from '../../Domain/User';
import IUserRepository from '../../Domain/UserRepository';
import MongoDbConnection from '../../../Shared/Configs/Persistence/MongoDB/MongoDbConnection';
import ErrorOnSaveUserException from '../Exceptions/ErrorOnSaveUserException';

export default class MongoUserRepository implements IUserRepository {
	#connection: MongoDbConnection;

	constructor() {
		this.#connection = new MongoDbConnection({ collection: 'users' });
	}

	create = async (user: User) => {
		try {
			const userData = user.toDocument();
			await this.#connection.insertOne(userData);
		} catch (error: Error | unknown) {
			if (error instanceof Error) {
				console.log(error.message)
			}
			throw new ErrorOnSaveUserException();
		}
	}
}
