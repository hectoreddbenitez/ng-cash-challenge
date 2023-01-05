"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AccountsRoutes_1 = __importDefault(require("./routes/AccountsRoutes"));
const TransactionsRoutes_1 = __importDefault(require("./routes/TransactionsRoutes"));
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(UserRoutes_1.default);
app.use(TransactionsRoutes_1.default);
app.use(AccountsRoutes_1.default);
exports.default = app;
