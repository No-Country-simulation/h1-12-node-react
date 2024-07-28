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
      res.status(HTTP_CODES.SUCCESS).send({user, token});
    } catch (error) {
      next(error);
    }
  };

  register = async (req, res, next) => {
    const payload = req.body;
    try {
      const user = await this.authService.registerUser(payload);
      await this.mailsService.newUserNotification(payload, user);
      res.status(HTTP_CODES.CREATED).json({payload, user});
    } catch (error) {
      next(error);
    }
  };

  currentUser = async (req, res, next) => {
    try {
      res.status(HTTP_CODES.SUCCESS).send(req.user);
    } catch (error) {
      next(error);
    }
  };

  recoverPassword = async (req, res, next) => {
    const { email } = req.body
    try {
      const user = await this.usersService.getByEmail(email)
      const emailSent = await this.mailsService.passwordRestoration(email, user)
      res.status(HTTP_CODES.SUCCESS).send(emailSent);
    } catch (error) {
      next(error)
    }
  }
}
