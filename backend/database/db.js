import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });


console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_PORT:", process.env.DB_PORT);

/* Se realiza la conexión a la base de datos */
const db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: process.env.DB_PORT || 3306,
        logging: console.log,
        dialectOptions: {
            connectTimeout: 20000, // 20 segundos
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000, // 30 segundos
            idle: 10000,   // 10 segundos
        },
    }
);

export default db