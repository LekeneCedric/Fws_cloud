"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DateVo {
    constructor() {
        this.date = new Date();
    }
    value() {
        return this.date.toISOString();
    }
}
exports.default = DateVo;
