import { Pool } from 'pg';

const db = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Book',
    password: 'root',
    port: 5432, 
});

export default db;