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
const AccountsModel_1 = __importDefault(require("../database/models/AccountsModel"));
class AccountsService {
    static findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const accountsList = AccountsModel_1.default.findAll({ raw: true });
            return accountsList;
        });
    }
    ;
    static create() {
        return __awaiter(this, void 0, void 0, function* () {
            const newAccount = yield AccountsModel_1.default.create();
            return newAccount.dataValues;
        });
    }
}
exports.default = AccountsService;
