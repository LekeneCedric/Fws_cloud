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
const SignUpCommandFactory_1 = __importDefault(require("../../Factories/SignUpCommandFactory"));
const InvalidCommandException_1 = __importDefault(require("../../../../Shared/Exceptions/InvalidCommandException"));
const SignUpHandler_1 = __importDefault(require("../../../Application/Command/SignUpHandler"));
const MongoUserRepository_1 = __importDefault(require("../../Repositories/MongoUserRepository"));
const TechnicalErrors_1 = require("../../../../Shared/TechnicalErrors");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const ErrorOnSaveUserException_1 = __importDefault(require("../../Exceptions/ErrorOnSaveUserException"));
const SignUpController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const httpResponse = {
        status: false,
        message: '',
        isSaved: false,
        token: '',
    };
    try {
        const command = yield SignUpCommandFactory_1.default.buildFromRequest(req);
        const response = new SignUpHandler_1.default(new MongoUserRepository_1.default()).handle(command);
        const token = jsonwebtoken_1.default.sign({ username: (_a = response.user) === null || _a === void 0 ? void 0 : _a.username, userId: (_b = response.user) === null || _b === void 0 ? void 0 : _b.id }, process.env.JWT_PRIVATE_KEY, { expiresIn: 60 * 60 });
        httpResponse.message = response.message;
        httpResponse.status = true;
        httpResponse.isSaved = response.isSaved;
        httpResponse.user = response.user;
        httpResponse.token = token;
    }
    catch (error) {
        switch (error) {
            case error instanceof InvalidCommandException_1.default:
                httpResponse.message = error.message;
                break;
            case error instanceof ErrorOnSaveUserException_1.default:
                httpResponse.message = TechnicalErrors_1.TechnicalErrors.critical;
            default:
                httpResponse.message = TechnicalErrors_1.TechnicalErrors.warning;
                break;
        }
    }
    res.status(200).send(httpResponse);
});
exports.default = SignUpController;
