"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsersController_1 = __importDefault(require("../controllers/UsersController"));
const usersRouter = (0, express_1.Router)();
usersRouter.post('/users', UsersController_1.default.create);
usersRouter.post('/users/login', UsersController_1.default.login);
usersRouter.get('/users', UsersController_1.default.findByName);
exports.default = usersRouter;
