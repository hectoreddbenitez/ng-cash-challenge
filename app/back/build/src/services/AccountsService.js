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
const Error_1 = __importDefault(require("../interfaces/Error"));
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database/config/database"));
const sequelize = new sequelize_1.Sequelize(database_1.default);
class AccountsService {
    static findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const accountsList = AccountsModel_1.default.findAll({ raw: true });
            return accountsList;
        });
    }
    static create() {
        return __awaiter(this, void 0, void 0, function* () {
            const newAccount = yield AccountsModel_1.default.create();
            return newAccount.dataValues;
        });
    }
    static findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(id);
            const account = yield AccountsModel_1.default.findOne({ where: { id } });
            console.log(account, 'aqui el account');
            if (!account) {
                const errorPayload = new Error_1.default('conta inexistente ', 401);
                return errorPayload;
            }
            return account;
        });
    }
    static updaterAccount(accountOutId, accountInnId, value) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const accountOut = (yield AccountsModel_1.default.findOne({
                    where: { id: accountOutId },
                }));
                const newValue1 = accountOut.balance - value;
                const accountInn = (yield AccountsModel_1.default.findOne({
                    where: { id: accountInnId },
                }));
                const newValue2 = accountInn.balance + value;
                const result = yield sequelize.transaction((t) => __awaiter(this, void 0, void 0, function* () {
                    yield AccountsModel_1.default.update({ value: newValue1 }, { where: { id: accountOutId },
                        transaction: t });
                    yield AccountsModel_1.default.update({ value: newValue2 }, { where: { id: accountInnId },
                        transaction: t });
                }));
                return result;
            }
            catch (e) {
                console.log(e);
                throw e;
            }
        });
    }
}
exports.default = AccountsService;
