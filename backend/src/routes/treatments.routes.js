import { Router } from 'express'
import { TreatmentsController } from '../controllers/treatments.controller.js'
import { authenticationMiddleware } from '../middlewares/authentication.middleware.js'
import { authorizationMiddleware } from '../middlewares/authorization.middleware.js'
import { addMedicationSchema, createTreatmentSchema, tidParam, updateTreatmentSchema } from '../schemas/treatment.schema.js'
import { validationMiddleware } from '../middlewares/validation.middleware.js'
import { midParam } from '../schemas/medication.schema.js'

const router = Router()
const treatmentsController = new TreatmentsController()

router.get('/',  
    authenticationMiddleware,
    authorizationMiddleware(["get-treatments"]),
    treatmentsController.getAllTreatments
)

router.get('/:tid',   
    validationMiddleware([tidParam]),
    authenticationMiddleware,
    authorizationMiddleware(["get-treatment"]),
    treatmentsController.getTreatmentById
)

router.post('/',   
    validationMiddleware([createTreatmentSchema]),
    authenticationMiddleware,
    authorizationMiddleware(["create-treatment"]),
    treatmentsController.createTreatment
)

router.patch('/:tid', 
    validationMiddleware([tidParam, updateTreatmentSchema]),
    authenticationMiddleware,
    authorizationMiddleware(["update-treatment"]),
    treatmentsController.updateTreatment
)

router.patch('/:tid/add-medication/:mid', 
    validationMiddleware([tidParam, midParam, addMedicationSchema]),
    authenticationMiddleware,
    authorizationMiddleware(["update-treatment"]),
    treatmentsController.addMedicationToTreament
)

router.delete('/:tid',   
    validationMiddleware([tidParam]),
    authenticationMiddleware,
    authorizationMiddleware(["delete-treatment"]),
    treatmentsController.deleteTreatment
)

export default router