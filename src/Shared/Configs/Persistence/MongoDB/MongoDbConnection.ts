import { Collection, Db, MongoClient } from 'mongodb';
import 'dotenv/config';

interface IMongoDbConnectionConstructor {
	collection: string,
}

export default class MongoDbConnection {
	static #db: Db | undefined = undefined;
	#collection: Collection;

	static async initConnection() {
		if (this.#db instanceof Db) {
			return;
		}
		const url = process.env.MONGO_DB_URL!;
		const dbName = process.env.MONGO_DB_DATABASE!;
		const client = new MongoClient(url);

		await client.connect();

		const db = client.db(dbName);

		if (this.#db! instanceof Db) {
			this.#db = db;
		}
	}

	constructor(params: IMongoDbConnectionConstructor) {
		this.#collection = MongoDbConnection.#db?.collection(params.collection)!
	}

	public async insertOne(data: Object) {
		return await this.#collection.insertOne(data);
	}

	public async insertMany(data: Object[]) {
		return await this.#collection.insertMany(data);
	}

}
