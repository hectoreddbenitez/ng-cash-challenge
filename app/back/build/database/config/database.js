"use strict";
require("dotenv/config");
const config = {
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'postgres',
    database: process.env.DB_NAME || 'ng-cash',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5441,
    dialect: 'postgres',
};
module.exports = config;
