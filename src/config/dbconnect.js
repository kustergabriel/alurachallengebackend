import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();
const dbDatabase = process.env.DB_DATABASE;
const dbPass = process.env.DB_PASSWORD;

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: dbPass,
    database: dbDatabase // Aqui vai o 'schema'
})

export default connection;