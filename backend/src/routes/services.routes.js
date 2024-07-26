import { Router } from 'express'
import { ServicesController } from '../controllers/services.controller.js'
import { authenticationMiddleware } from '../middlewares/authentication.middleware.js'
import { authorizationMiddleware } from '../middlewares/authorization.middleware.js'
import { sidParam } from '../schemas/service.schema.js'
import { validationMiddleware } from '../middlewares/validation.middleware.js'

const router = Router()
const servicesController = new ServicesController()

router.get('/',
    authenticationMiddleware,
    authorizationMiddleware(["get-services"]),
    servicesController.getAllServices
)

router.get('/:sid',
    validationMiddleware([sidParam]),
    authenticationMiddleware,
    authorizationMiddleware(["get-service"]),
    servicesController.getServiceById
)

export default router