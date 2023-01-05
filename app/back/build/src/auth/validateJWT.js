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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const UsersService_1 = __importDefault(require("../services/UsersService"));
const SECRET = process.env.JWT_SECRET;
class ValidateJWT {
    static tokenValidator(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { authorization: token } = req.headers;
                if (!token)
                    return res.status(403).json({ message: 'Token is required' });
                const decoded = jsonwebtoken_1.default.verify(token, SECRET);
                const user = yield UsersService_1.default.findByName(decoded.data.username);
                if (!user)
                    return res.status(401).json({ message: 'Invalid token' });
                next();
            }
            catch (e) {
                console.log(e);
                return res.status(401).json({ message: e });
            }
        });
    }
}
exports.default = ValidateJWT;
