import dotenv from "dotenv";

dotenv.config();

console.log(process.env.APP_PORT);

const { APP_PORT } = process.env;

export { APP_PORT };
