"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const SECRET = process.env.JWT_SECRET;
class JwtHelper {
    static tokenGenerator(data) {
        const { id, username } = data;
        const token = jsonwebtoken_1.default.sign({ data: { id, username } }, SECRET, {
            expiresIn: '24h',
            algorithm: 'HS256',
        });
        return token;
    }
}
exports.default = JwtHelper;
