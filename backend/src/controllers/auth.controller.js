import { cookieConfig } from "../config/cookies.config.js";
import { AuthService } from "../services/auth.service.js";
import { MailsService } from "../services/mail.service.js";
import { UsersService } from "../services/users.service.js";
import { isValidPassword } from "../utils/bcrypt.util.js";
import { HTTP_CODES } from "../utils/http-codes.util.js";
import { HttpError } from "../utils/http-error.util.js";
import { generateAccessToken } from "../utils/jwt.util.js";

export class AuthController {
  constructor() {
    this.authService = new AuthService();
    this.usersService = new UsersService();
    this.mailsService = new MailsService();
  }

  login = async (req, res, next) => {
    const { username, password } = req.body;
    try {
      const user = await this.usersService.getByUsername(username);
      if (!isValidPassword(user, password)) {
        throw new HttpError("Bad credentials", HTTP_CODES.UNAUTHORIZED);
      }
      const token = generateAccessToken(user);
      res.cookie("token", token, cookieConfig);
      res.status(HTTP_CODES.SUCCESS).send(user);
    } catch (error) {
      next(error);
    }
  };

  register = async (req, res, next) => {
    try {
      const payload = req.body;
      const user = await this.authService.registerUser(payload);
      await this.mailsService.newUserNotification(payload);
      res.status(HTTP_CODES.CREATED).json(user);
    } catch (error) {
      next(error);
    }
  };

  logout = async (req, res, next) => {
    try {
      res.cookie("token", "", { maxAge: 0 });
      res.status(200).json({ message: "Logout successful" });
    } catch (error) {
      next(error);
    }
  };

  // solo para hacer pruebas de autenticación
  currentUser = async (req, res, next) => {
    try {
      res.status(HTTP_CODES.SUCCESS).send(req.user);
    } catch (error) {
      next(error);
    }
  };
}
