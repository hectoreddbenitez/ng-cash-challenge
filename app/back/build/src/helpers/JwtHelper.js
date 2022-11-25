"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const SECRET = process.env.JWT_SECRET;
class JwtHelper {
    static tokenGenerator(user) {
        const token = jsonwebtoken_1.default.sign({ data: user }, SECRET, { expiresIn: '24h', algorithm: 'HS256', });
        return token;
    }
    static tokenValidator(token) {
        const decoded = jsonwebtoken_1.default.verify(token, SECRET);
        const { username } = decoded.data;
        return username;
    }
}
exports.default = JwtHelper;
