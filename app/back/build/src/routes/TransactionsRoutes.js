"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateJWT_1 = __importDefault(require("../auth/validateJWT"));
const TransactionsController_1 = __importDefault(require("../controllers/TransactionsController"));
const transactionsRouter = (0, express_1.Router)();
transactionsRouter.post('/transactions', validateJWT_1.default.tokenValidator, TransactionsController_1.default.create);
exports.default = transactionsRouter;
