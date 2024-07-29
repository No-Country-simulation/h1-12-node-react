import { Router } from 'express'
import { ConsultationsController } from '../controllers/consultations.controller.js'
import { authenticationMiddleware } from '../middlewares/authentication.middleware.js'
import { authorizationMiddleware } from '../middlewares/authorization.middleware.js'
import { createConsultationSchema, cidParam, updateConsultationSchema } from '../schemas/consultation.schema.js'
import { validationMiddleware } from '../middlewares/validation.middleware.js'

const router = Router()
const consultationsController = new ConsultationsController()

router.get('/',
    authenticationMiddleware,
    authorizationMiddleware(["get-consultations"]),
    consultationsController.getAllConsultations
)

router.get('/:cid',
    validationMiddleware([cidParam]),
    authenticationMiddleware,
    authorizationMiddleware(["get-consultation"]),
    consultationsController.getConsultationById
)

router.post('/',   
    validationMiddleware([createConsultationSchema]),
    authenticationMiddleware,
    authorizationMiddleware(["create-consultation"]),
    consultationsController.createConsultation
)

router.patch('/:cid', 
    validationMiddleware([cidParam, updateConsultationSchema]),
    authenticationMiddleware,
    authorizationMiddleware(["update-consultation"]),
    consultationsController.updateConsultation
)

router.delete('/:cid',   
    validationMiddleware([cidParam]),
    authenticationMiddleware,
    authorizationMiddleware(["delete-consultation"]),
    consultationsController.deleteConsultation
)

export default router