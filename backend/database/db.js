import { Sequelize } from "sequelize";
import 'dotenv/config'; 


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
            connectTimeout: 60000,
            // Opciones SSL si el servidor lo requiere
            ssl: {
                rejectUnauthorized: false
            }
        },
        retry: {
            max: 3 // Número de intentos de reconexión
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);



export default db;