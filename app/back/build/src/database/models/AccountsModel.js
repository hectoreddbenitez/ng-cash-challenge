"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const TransactionsModel_1 = __importDefault(require("./TransactionsModel"));
class Accounts extends sequelize_1.Model {
}
Accounts.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.INTEGER,
    },
    balance: {
        type: (0, sequelize_1.DECIMAL)(10, 2)
    }
}, {
    underscored: true,
    sequelize: _1.default,
    modelName: 'accounts',
    timestamps: false,
});
Accounts.hasMany(TransactionsModel_1.default, { foreignKey: 'debited_account_id' });
Accounts.hasMany(TransactionsModel_1.default, { foreignKey: 'credited_account_id' });
TransactionsModel_1.default.belongsTo(Accounts, { foreignKey: 'debited_account_id' });
TransactionsModel_1.default.belongsTo(Accounts, { foreignKey: 'debited_account_id' });
exports.default = Accounts;
