"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateJWT_1 = __importDefault(require("../auth/validateJWT"));
const AccountsController_1 = __importDefault(require("../controllers/AccountsController"));
const accountsRouter = (0, express_1.Router)();
accountsRouter.get('/accounts/:id', validateJWT_1.default.tokenValidator, AccountsController_1.default.findAccount);
exports.default = accountsRouter;
