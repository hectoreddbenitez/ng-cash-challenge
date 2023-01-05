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
const AccountsService_1 = __importDefault(require("./AccountsService"));
const Error_1 = __importDefault(require("../interfaces/Error"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class UsersService {
    static create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password } = data;
            const userAllreadyExist = yield UsersModel_1.default.findOne({ where: { username } });
            if (userAllreadyExist) {
                return new Error_1.default('Oops! It looks like a user with that name already exists', 401);
            }
            ;
            const { id } = yield AccountsService_1.default.create();
            const passwordHash = bcryptjs_1.default.hashSync(password, 10);
            const newUser = yield UsersModel_1.default.create({
                username,
                password: passwordHash,
                accountId: id,
            });
            const { id: userId } = newUser;
            const newUserWithoutPass = { userId, username, accountId: id };
            return newUserWithoutPass;
        });
    }
    static authenticate(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password } = data;
            const user = yield UsersModel_1.default.findOne({ where: { username } });
            if (!user) {
                return new Error_1.default('The username or password is wrong', 401);
            }
            const passwordDb = user.password;
            const passwordIsOk = bcryptjs_1.default.compareSync(password, passwordDb);
            if (passwordIsOk === false) {
                return new Error_1.default('The username or password is wrong', 401);
            }
            return user;
        });
    }
    static findByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield UsersModel_1.default.findOne({ where: { username: name } });
            console.log('AQUI O USER', user);
            if (!user) {
                return new Error_1.default('No existe', 400);
            }
            const { id, username, account_id } = user;
            return { id, username, account_id };
        });
    }
    static findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield UsersModel_1.default.findAll({ raw: true });
            console.log('aqui o user', user);
            return user;
        });
    }
}
exports.default = UsersService;
