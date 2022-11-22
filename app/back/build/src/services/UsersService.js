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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UsersModel_1 = __importDefault(require("../database/models/UsersModel"));
const AccountsServices_1 = __importDefault(require("./AccountsServices"));
// import Users from "../interfaces/User";
class UsersService {
    static create(username, userpass) {
        return __awaiter(this, void 0, void 0, function* () {
            // const idAccount = accountmode.crete()
            const { id } = yield AccountsServices_1.default.create();
            const newUser = yield UsersModel_1.default.create({
                username,
                userpass,
                accountId: id,
            });
            const password = __rest(newUser, []);
            return newUser;
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
            return user;
        });
    }
}
exports.default = UsersService;
