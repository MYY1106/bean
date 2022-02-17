import verifyUser from "./register/verifyUser.middleware";
import handlePassword from "./register/handlePassword.middleware";
import verifyLogin from "./login/verifyLogin.middleware";
import verifyAuth from "./verifyAuth.middleware";

export { verifyUser, handlePassword, verifyLogin, verifyAuth };