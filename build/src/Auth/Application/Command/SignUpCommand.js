"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SignUpCommand {
    constructor(params) {
        this.username = params.username;
        this.email = params.email;
        this.password = params.password;
    }
}
exports.default = SignUpCommand;
