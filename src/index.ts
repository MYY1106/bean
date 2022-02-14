import app from "./app";
import { APP_PORT } from "./app/config";

app.listen(APP_PORT, () => {
  console.log(`server is running at ${APP_PORT}`);
});

const mysql = require("mysql2")

const connection = mysql.createConnection({
  host: "120.77.78.73", //远程地址，本地MySQL是localhost
  port: "3306",
  user: "root",
  password: "12345678"
})

connection.connect(function (err: Error) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("成功连接MySQL")
})
