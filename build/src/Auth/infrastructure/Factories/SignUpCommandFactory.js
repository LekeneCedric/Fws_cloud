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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const InvalidCommandException_1 = __importDefault(require("../../../Shared/Exceptions/InvalidCommandException"));
const SignUpCommand_1 = __importDefault(require("../../Application/Command/SignUpCommand"));
class SignUpCommandFactory {
}
_a = SignUpCommandFactory;
SignUpCommandFactory.buildFromRequest = (req) => __awaiter(void 0, void 0, void 0, function* () {
    _a.validateRequest(req);
    const username = req.body.username;
    const email = req.body.email;
    const password = yield bcrypt_1.default.hash(req.body.password, 10);
    return new SignUpCommand_1.default({ username: username, email: email, password: password });
});
SignUpCommandFactory.validateRequest = (req) => {
    if (!req.body.email || !req.body.password || !req.body.username) {
        throw new InvalidCommandException_1.default('commande invalide !');
    }
};
exports.default = SignUpCommandFactory;
