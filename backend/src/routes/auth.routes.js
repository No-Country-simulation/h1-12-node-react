import { Router } from 'express'
import { AuthController } from '../controllers/auth.controller.js'
import { authenticationMiddleware } from '../middlewares/authentication.middleware.js'
import { authorizationMiddleware } from '../middlewares/authorization.middleware.js'

const router = Router()
const authController = new AuthController()

router.post('/login', authController.login)
router.post('/register', authController.register)
router.get('/logout', authController.logout)

router.get('/current', 
    authenticationMiddleware, 
    authorizationMiddleware(['test']), //aquí se pasan los permisos requeridos para esta ruta
    authController.currentUser
)

export default router