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
const Error_1 = __importDefault(require("../interfaces/Error"));
const AccountsService_1 = __importDefault(require("../services/AccountsService"));
class AccountsController {
    static findAccount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const account = yield AccountsService_1.default.findOne(id);
                if (account instanceof Error_1.default) {
                    return res.status(account.code).json({ message: account.message });
                }
                return res.status(200).json(account);
            }
            catch (e) {
                console.log(e);
                res.status(500).json(e);
            }
        });
    }
}
exports.default = AccountsController;
