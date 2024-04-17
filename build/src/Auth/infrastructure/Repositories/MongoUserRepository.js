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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MongoDbConnection_1 = __importDefault(require("../../../Shared/Configs/Persistence/MongoDB/MongoDbConnection"));
const ErrorOnSaveUserException_1 = __importDefault(require("../Exceptions/ErrorOnSaveUserException"));
class MongoUserRepository {
    constructor() {
        this.create = (user) => __awaiter(this, void 0, void 0, function* () {
            try {
                const userData = user.toDocument();
                yield this.connection.insertOne(userData);
            }
            catch (error) {
                throw new ErrorOnSaveUserException_1.default();
            }
        });
        this.connection = MongoDbConnection_1.default.newConnection({ collection: 'users' });
    }
}
exports.default = MongoUserRepository;
