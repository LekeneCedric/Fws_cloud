"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _SignUpHandler_repository;
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../../Domain/User"));
const SignUpResponse_1 = __importDefault(require("./SignUpResponse"));
class SignUpHandler {
    constructor(repository) {
        _SignUpHandler_repository.set(this, void 0);
        __classPrivateFieldSet(this, _SignUpHandler_repository, repository, "f");
    }
    handle(command) {
        const response = new SignUpResponse_1.default();
        const user = User_1.default.create(command.username, command.email, command.password);
        __classPrivateFieldGet(this, _SignUpHandler_repository, "f").save(user);
        response.isSaved = true;
        response.message = 'User create successfully !';
        response.user = { id: user.id(), email: command.email, username: command.username };
        return response;
    }
}
_SignUpHandler_repository = new WeakMap();
exports.default = SignUpHandler;
