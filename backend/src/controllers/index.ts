import { login } from "./authControllers/loginController";
import { register } from "./authControllers/registerController";
import { logout } from "./authControllers/logoutController";
import { resetPassword } from "./authControllers/resetPasswordController";
import { verifyEmail } from "./authControllers/verifyEmailController";



export {
    login,
    register,
    logout,
    resetPassword,
    verifyEmail
}