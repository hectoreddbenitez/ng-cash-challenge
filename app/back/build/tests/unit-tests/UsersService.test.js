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
const UsersService_1 = __importDefault(require("../../src/services/UsersService"));
describe('Testes camada Services de User', () => {
    it.only('Requisição findAll inicial, deve retornar uma lista vazia', () => __awaiter(void 0, void 0, void 0, function* () {
        const userList = [];
        const response = yield UsersService_1.default.findAll();
        expect(response).toStrictEqual(userList);
    }));
    it('deve criar um usuario com sucesso', () => __awaiter(void 0, void 0, void 0, function* () {
        yield UsersService_1.default.create('Diego Siva', 'User04pass');
        //verifica a existencia do usuario criado anterioremente, procurando pelo username
        const usersList = yield UsersService_1.default.findByName('Diego Silva');
        console.log(usersList);
        expect(usersList === null || usersList === void 0 ? void 0 : usersList.username).toBe('Diego Silva');
    }));
});
