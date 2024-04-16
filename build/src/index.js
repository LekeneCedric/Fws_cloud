"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
require("dotenv/config");
const routes_1 = __importDefault(require("./Auth/infrastructure/routes/routes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.use(body_parser_1.default.json());
app.use('/api/auth', routes_1.default);
app.listen(port, () => console.log(`[SERVER]: started at ${port}`));
