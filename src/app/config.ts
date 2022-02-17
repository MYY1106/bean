import dotenv from "dotenv";
import fs from 'fs'
import path from 'path'

const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname, './keys/private.key'), 'utf8');
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, './keys/public.key'), 'utf8');

dotenv.config();

console.log(process.env.APP_PORT);

const { APP_PORT, MYSQL_HOST, MYSQL_PORT, MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD } = process.env;

export { APP_PORT, MYSQL_HOST, MYSQL_PORT, MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, PRIVATE_KEY, PUBLIC_KEY };
