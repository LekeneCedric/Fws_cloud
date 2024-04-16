"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SignInController_1 = __importDefault(require("../Http/controllers/SignInController"));
const SignUpController_1 = __importDefault(require("../Http/controllers/SignUpController"));
const authRoutes = (0, express_1.Router)();
authRoutes.post('/sign_in', SignInController_1.default);
authRoutes.post('/sign_up', SignUpController_1.default);
exports.default = authRoutes;
