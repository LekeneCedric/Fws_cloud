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
var _User_id, _User_username, _User_email, _User_password, _User_createdAt;
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const DateVo_1 = __importDefault(require("../../Shared/VO/DateVo"));
class User {
    constructor(params) {
        _User_id.set(this, void 0);
        _User_username.set(this, void 0);
        _User_email.set(this, void 0);
        _User_password.set(this, void 0);
        _User_createdAt.set(this, void 0);
        __classPrivateFieldSet(this, _User_id, params.id, "f");
        __classPrivateFieldSet(this, _User_username, params.username, "f");
        __classPrivateFieldSet(this, _User_email, params.email, "f");
        __classPrivateFieldSet(this, _User_password, params.password, "f");
    }
    static create(username, email, password) {
        const newUser = new this({ id: (0, uuid_1.v4)(), username: username, email: email, password: password });
        __classPrivateFieldSet(newUser, _User_createdAt, new DateVo_1.default(), "f");
        return newUser;
    }
    id() {
        return __classPrivateFieldGet(this, _User_id, "f");
    }
    toDocument() {
        var _a;
        return {
            username: __classPrivateFieldGet(this, _User_username, "f"),
            email: __classPrivateFieldGet(this, _User_email, "f"),
            password: __classPrivateFieldGet(this, _User_password, "f"),
            created_at: (_a = __classPrivateFieldGet(this, _User_createdAt, "f")) === null || _a === void 0 ? void 0 : _a.value
        };
    }
}
_User_id = new WeakMap(), _User_username = new WeakMap(), _User_email = new WeakMap(), _User_password = new WeakMap(), _User_createdAt = new WeakMap();
exports.default = User;
