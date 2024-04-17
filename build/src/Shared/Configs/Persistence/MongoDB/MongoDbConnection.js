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
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _a, _MongoDbConnection_db, _MongoDbConnection_collection;
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
require("dotenv/config");
class MongoDbConnection {
    static initConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            if (__classPrivateFieldGet(this, _a, "f", _MongoDbConnection_db) instanceof mongodb_1.Db) {
                return;
            }
            const url = process.env.MONGO_DB_URL;
            const dbName = process.env.MONGO_DB_DATABASE;
            const client = new mongodb_1.MongoClient(url);
            yield client.connect();
            const db = client.db(dbName);
            if (__classPrivateFieldGet(this, _a, "f", _MongoDbConnection_db) instanceof mongodb_1.Db) {
                __classPrivateFieldSet(this, _a, db, "f", _MongoDbConnection_db);
            }
        });
    }
    constructor(params) {
        var _b;
        _MongoDbConnection_collection.set(this, void 0);
        __classPrivateFieldSet(this, _MongoDbConnection_collection, (_b = __classPrivateFieldGet(_a, _a, "f", _MongoDbConnection_db)) === null || _b === void 0 ? void 0 : _b.collection(params.collection), "f");
    }
    insertOne(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _MongoDbConnection_collection, "f").insertOne(data);
        });
    }
    insertMany(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _MongoDbConnection_collection, "f").insertMany(data);
        });
    }
}
_a = MongoDbConnection, _MongoDbConnection_collection = new WeakMap();
_MongoDbConnection_db = { value: undefined };
exports.default = MongoDbConnection;
