"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Transactions extends sequelize_1.Model {
}
Transactions.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.INTEGER,
    },
    debitedAccountId: {
        allowNull: false,
        type: sequelize_1.INTEGER,
    },
    creditedAccountId: {
        allowNull: false,
        type: sequelize_1.INTEGER,
    },
    value: {
        allowNull: false,
        type: (0, sequelize_1.DECIMAL)(10, 2),
    },
    createdAt: {
        type: 'TIMESTAMP',
        defaultValue: (0, sequelize_1.literal)('CURRENT_TIMESTAMP'),
        allowNull: false,
        field: 'created_at',
    }
}, {
    underscored: true,
    sequelize: _1.default,
    modelName: 'transactions',
    timestamps: false,
});
// Accounts.hasMany(Transactions, { foreignKey: 'debitedAccountId', as: 'debitAccount' });
// Accounts.hasMany(Transactions, { foreignKey: 'creditedAccountId', as: 'creditAccount' });
// Transactions.belongsTo(Accounts, { foreignKey: 'id', as: 'creditAccountId' });
// Transactions.belongsTo(Accounts, { foreignKey: 'id', as: 'debitAccountId' });
exports.default = Transactions;
