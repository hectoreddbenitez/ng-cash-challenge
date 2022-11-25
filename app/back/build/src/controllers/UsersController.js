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
const UsersService_1 = __importDefault(require("../services/UsersService"));
class UsersController {
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, password } = req.body;
                const newUser = yield UsersService_1.default.create(username, password);
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
                const { username, password } = req.body;
                if (!username || !password) {
                    return res.status(404).send('Completa os campos username e password');
                }
                const user = yield UsersService_1.default.authenticate(username, password);
                if (user instanceof Error_1.default) {
                    return res.status(user.code).json({ message: user.message });
                }
                const token = JwtHelper_1.default.tokenGenerator(user);
                return res.status(200).json({ user: user, token });
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
}
exports.default = UsersController;
