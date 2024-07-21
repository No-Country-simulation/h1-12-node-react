import { Router } from 'express'
import { MedicationsController } from '../controllers/medications.controller.js'
import { authenticationMiddleware } from '../middlewares/authentication.middleware.js'
import { authorizationMiddleware } from '../middlewares/authorization.middleware.js'
import { validationMiddleware } from '../middlewares/validation.middleware.js'
import { midParam, mqueryParam } from '../schemas/medication.schema.js'

const router = Router()
const medicationsController = new MedicationsController()

router.get('/',  
    authenticationMiddleware,
    authorizationMiddleware(["get-medications"]),
    medicationsController.getAllMedications
)

router.get('/query/:mquery',
    validationMiddleware([mqueryParam]),
    authenticationMiddleware,
    authorizationMiddleware(["get-medications"]),
    medicationsController.getMedicationsByQuery
)

router.get('/:mid',   
    validationMiddleware([midParam]),
    authenticationMiddleware,
    authorizationMiddleware(["get-medication"]),
    medicationsController.getMedicationById
)

export default router