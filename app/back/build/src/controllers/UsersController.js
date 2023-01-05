"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JwtHelper_1 = __importDefault(require("../helpers/JwtHelper"));
const Error_1 = __importDefault(require("../interfaces/Error"));
const usersSchema_1 = require("../schemas/usersSchema");
const UsersService_1 = __importDefault(require("../services/UsersService"));
class UsersController {
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const valid = (0, usersSchema_1.usersSchema)(req.body);
                if (valid.error) {
                    return res.status(400).json(valid.error.message);
                }
                const newUser = yield UsersService_1.default.create(req.body);
                if (newUser instanceof Error_1.default) {
                    return res.status(newUser.code).json({ message: newUser.message });
                }
                return res.status(201).send(newUser);
            }
            catch (e) {
                console.log(e);
                return res.status(500).json(e);
            }
        });
    }
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const valid = (0, usersSchema_1.usersSchema)(req.body);
                if (valid.error) {
                    return res.status(400).json(valid.error.message);
                }
                const user = yield UsersService_1.default.authenticate(req.body);
                if (user instanceof Error_1.default) {
                    return res.status(user.code).json({ message: user.message });
                }
                const { id, username } = user;
                const token = JwtHelper_1.default.tokenGenerator(user);
                return res.status(200).json({ id, username, token });
            }
            catch (e) {
                console.log(e);
                res.status(500).json(e);
            }
        });
    }
    static findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usersList = yield UsersService_1.default.findAll();
                return res.status(200).send(usersList);
            }
            catch (e) {
                console.log(e);
                return res.status(500).json(e);
            }
        });
    }
    static findByName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username } = req.body;
                const user = yield UsersService_1.default.findByName(username);
                if (user instanceof Error_1.default) {
                    return res.status(user.code).json({ message: user.message });
                }
                const { id } = user;
                return res.status(200).json(user);
            }
            catch (e) {
                console.log(e);
                return res.status(500).json(e);
            }
        });
    }
}
exports.default = UsersController;
