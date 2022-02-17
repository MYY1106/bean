import app from "./app";
require("./app/database")

import { APP_PORT } from "./app/config";


app.listen(APP_PORT, () => {
  console.log(`server is running at ${APP_PORT}`);
});


