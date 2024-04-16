"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const InvalidCommandException_1 = __importDefault(require("../../../Shared/Exceptions/InvalidCommandException"));
const SignUpCommand_1 = __importDefault(require("../../Application/Command/SignUpCommand"));
class SignUpCommandFactory {
}
_a = SignUpCommandFactory;
SignUpCommandFactory.buildFromRequest = (req) => {
    _a.validateRequest(req);
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    return new SignUpCommand_1.default({ username: username, email: email, password: password });
};
SignUpCommandFactory.validateRequest = (req) => {
    if (!req.body.email || !req.body.password || !req.body.username) {
        throw new InvalidCommandException_1.default('commande invalide !');
    }
};
exports.default = SignUpCommandFactory;
