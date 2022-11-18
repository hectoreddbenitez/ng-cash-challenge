"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const TransactionsModels_1 = __importDefault(require("./TransactionsModels"));
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
        allowNull: false,
        type: (0, sequelize_1.DECIMAL)(10, 2)
    }
}, {
    underscored: true,
    sequelize: _1.default,
    modelName: 'accounts',
    timestamps: false,
});
Accounts.hasMany(TransactionsModels_1.default, { foreignKey: 'debited_account_id' });
Accounts.hasMany(TransactionsModels_1.default, { foreignKey: 'credited_account_id' });
TransactionsModels_1.default.belongsTo(Accounts, { foreignKey: 'debited_account_id' });
TransactionsModels_1.default.belongsTo(Accounts, { foreignKey: 'debited_account_id' });
// OtherModel.belongsTo(Example, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(Example, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });
// Example.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// Example.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });
exports.default = Accounts;
