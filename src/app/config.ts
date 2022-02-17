import dotenv from "dotenv";

dotenv.config();

console.log(process.env.APP_PORT);

const {
    APP_PORT,
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_DATABASE,
    MYSQL_USER,
    MYSQL_PASSWORD
} = process.env;

const MYSQL_PORT_NUM = parseInt(MYSQL_PORT);

export {
    APP_PORT,
    MYSQL_HOST,
    MYSQL_PORT_NUM,
    MYSQL_DATABASE,
    MYSQL_USER,
    MYSQL_PASSWORD
};
