import { Router } from 'express'
import { AuthController } from '../controllers/auth.controller.js'
import { authenticationMiddleware } from '../middlewares/authentication.middleware.js'

const router = Router()
const authController = new AuthController()

router.post('/login', authController.login)
router.post('/register-patient', authController.registerPatient)
router.post('/register-professional', authController.registerProfessional)
router.post('/register-insurance', authController.registerHealthInsurance)
router.post('/register-institution', authController.registerInstitution)
router.get('/current', authenticationMiddleware, authController.currentUser) // solo para hacer pruebas de autenticación

export default router