import { Router } from 'express'
import { IntakesController } from '../controllers/intakes.controller.js'
import { authenticationMiddleware } from '../middlewares/authentication.middleware.js'
import { authorizationMiddleware } from '../middlewares/authorization.middleware.js'
import { createIntakeSchema, iidParam, updateIntakeSchema } from '../schemas/intake.schema.js'
import { validationMiddleware } from '../middlewares/validation.middleware.js'

const router = Router()
const intakesController = new IntakesController()

router.get('/',
    authenticationMiddleware,
    authorizationMiddleware(["get-intakes"]),
    intakesController.getAllIntakes
)

router.get('/:iid',
    validationMiddleware([iidParam]),
    authenticationMiddleware,
    authorizationMiddleware(["get-intake"]),
    intakesController.getIntakeById
)

router.post('/',   
    validationMiddleware([createIntakeSchema]),
    authenticationMiddleware,
    authorizationMiddleware(["create-intake"]),
    intakesController.createIntake
)

router.patch('/:iid', 
    validationMiddleware([iidParam, updateIntakeSchema]),
    authenticationMiddleware,
    authorizationMiddleware(["update-intake"]),
    intakesController.updateIntake
)

router.delete('/:iid',   
    validationMiddleware([iidParam]),
    authenticationMiddleware,
    authorizationMiddleware(["delete-intake"]),
    intakesController.deleteIntake
)

export default router