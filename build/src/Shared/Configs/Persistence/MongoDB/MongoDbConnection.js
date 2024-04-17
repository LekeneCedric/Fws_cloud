"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
require("dotenv/config");
class MongoDbConnection {
    constructor(collection) {
        this.collection = collection;
    }
    static initializeConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = process.env.MONGO_DB_URL || '';
            this.client = new mongodb_1.MongoClient(url);
            yield this.client.connect();
            const dbName = process.env.MONGO_DB_DATABASE || '';
            this.db = this.client.db(dbName);
        });
    }
    static newConnection(params) {
        const connection = MongoDbConnection.db.collection(params.collection);
        return new MongoDbConnection(connection);
    }
    insertOne(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.collection.insertOne(data);
        });
    }
    insertMany(datas) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.collection.insertMany(datas);
        });
    }
}
exports.default = MongoDbConnection;
