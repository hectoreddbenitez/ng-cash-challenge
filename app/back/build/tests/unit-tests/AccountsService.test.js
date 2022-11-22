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
const AccountsModel_1 = __importDefault(require("../../src/database/models/AccountsModel"));
const AccountsServices_1 = __importDefault(require("../../src/services/AccountsServices"));
jest.mock('../../src/database/models/AccountsModel');
AccountsModel_1.default.findAll.mockResolvedValue([])(AccountsModel_1.default.create).mockResolvedValue([{ id: 1, balance: "100.00" }]);
describe.only('Testes camada Services de Accounts', () => {
    it('Requisição inicial findAll, deve retornar uma lista vazia', () => __awaiter(void 0, void 0, void 0, function* () {
        const accountsList = [];
        const response = yield AccountsServices_1.default.findAll();
        expect(response).toStrictEqual(accountsList);
    }));
    it('Deve criar uma account com sucesso, e retornar Id da conta e valor inicial de $100,00', () => __awaiter(void 0, void 0, void 0, function* () {
        const expectedAccount = { id: 1, balance: "100.00" };
        const response = yield AccountsServices_1.default.create();
        expect(response).toStrictEqual(expectedAccount);
    }));
});
