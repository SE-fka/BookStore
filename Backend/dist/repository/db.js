"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const db = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Book',
    password: 'root',
    port: 5432,
});
exports.default = db;
//# sourceMappingURL=db.js.map