import { cookieConfig } from "../config/cookies.config.js"
import { AuthService } from "../services/auth.service.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"
import { generateAccessToken } from "../utils/jwt.util.js"

export class AuthController {

    constructor(){
        this.authService = new AuthService()
    }

    login = async (req, res, next) => {
        try {
            res.send(usersList)
        } catch (error) {
            next(error)
        }
    }

    registerPatient = async (req, res, next) => {
        try {
            const { email, password } = req.body
            const user = await this.authService.createPatient(email, password)
            const token = generateAccessToken(user) // al token habría que pasarle solo los datos no sensibles del usuario
            res.cookie('token', token, cookieConfig) // seteo la cookie con el nombre token, el contenido de este, y la configuración de seguridad
            res.status(HTTP_CODES.CREATED).json(user)
        } catch (error) {
            next(error)
        }
    }

    registerDoctor = async (req, res, next) => {
        try {
            res.send()
        } catch (error) {
            next(error)
        }
    }

    // solo para hacer pruebas de autenticación
    privateContent = async (req, res, next) => {
        try {
            res.send(req.user)
        } catch (error) {
            next(error)
        }
    }
}