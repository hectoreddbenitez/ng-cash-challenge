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
const UsersModel_1 = __importDefault(require("../database/models/UsersModel"));
const AccountsServices_1 = __importDefault(require("./AccountsServices"));
const Error_1 = __importDefault(require("../interfaces/Error"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class UsersService {
    static create(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const userAllreadyExist = yield this.findByName(username);
            if (userAllreadyExist) {
                return ({ status: 409, message: 'Opss! parece que esse nome já está em uso' });
            }
            ;
            const { id } = yield AccountsServices_1.default.create();
            const passwordHash = bcryptjs_1.default.hashSync(password, 10);
            const newUser = yield UsersModel_1.default.create({
                username,
                password: passwordHash,
                accountId: id,
            });
            return newUser;
        });
    }
    static authenticate(username, pass) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield UsersModel_1.default.findOne({ where: { username } });
            if (!user) {
                const errorPayload = new Error_1.default('O usuario ou senha estão errados', 401);
                return errorPayload;
            }
            const passwordDb = user.password;
            const passwordIsOk = bcryptjs_1.default.compareSync(pass, passwordDb);
            if (!passwordIsOk) {
                const errorPayload = new Error_1.default('O usuario ou senha estão errados', 401);
                return errorPayload;
            }
            const { id } = user;
            const userToReturn = { id, username };
            return userToReturn;
        });
    }
    static findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const userList = yield UsersModel_1.default.findAll({ raw: true });
            return userList;
        });
    }
    static findByName(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield UsersModel_1.default.findOne({ where: { username } });
            if (!user) {
            }
            ;
            return user;
        });
    }
}
exports.default = UsersService;
