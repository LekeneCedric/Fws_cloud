import { Collection } from 'mongodb';
import User from '../../Domain/User';
import IUserRepository from '../../Domain/UserRepository';
import MongoDbConnection from '../../../Shared/Configs/Persistence/MongoDB/MongoDbConnection';
import ErrorOnSaveUserException from '../Exceptions/ErrorOnSaveUserException';

export default class MongoUserRepository implements IUserRepository {
	private connection: MongoDbConnection;

	constructor() {
		this.connection = MongoDbConnection.newConnection({ collection: 'users' });
	}

	create = async (user: User) => {
		try {
			const userData = user.toDocument();
			await this.connection.insertOne(userData);
		} catch (error: Error | unknown) {
			throw new ErrorOnSaveUserException();
		}
	}
}
