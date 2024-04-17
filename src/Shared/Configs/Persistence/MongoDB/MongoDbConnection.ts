import { Collection, Db, MongoClient } from 'mongodb';
import 'dotenv/config';

interface IMongoDbConnectionConstructor {
	collection: string,
}

export default class MongoDbConnection {
	static client: MongoClient;
	static db: Db;
	private collection: Collection;

	private constructor(collection: Collection) {
		this.collection = collection;
	}

	static async initializeConnection() {
		const url = process.env.MONGO_DB_URL || '';
		this.client = new MongoClient(url);

		await this.client.connect();

		const dbName = process.env.MONGO_DB_DATABASE || '';
		this.db = this.client.db(dbName);
	}

	static newConnection(params: IMongoDbConnectionConstructor) {
		const connection = MongoDbConnection.db.collection(params.collection);
		return new MongoDbConnection(connection)
	}

	public async insertOne(data: Object) {
		await this.collection.insertOne(data);
	}

	public async insertMany(datas: Object[]) {
		await this.collection.insertMany(datas);
	}
}
