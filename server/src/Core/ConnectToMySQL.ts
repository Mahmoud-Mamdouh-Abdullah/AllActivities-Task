import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

export var connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
});
