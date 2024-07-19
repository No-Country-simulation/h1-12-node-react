import { Router } from 'express'
import { PathologiesController } from '../controllers/pathologies.controller.js'
import { authenticationMiddleware } from '../middlewares/authentication.middleware.js'
import { authorizationMiddleware } from '../middlewares/authorization.middleware.js'
import { validationMiddleware } from '../middlewares/validation.middleware.js'
import { pidParam, pqueryParam } from '../schemas/pathology.shema.js'

const router = Router()
const pathologiesController = new PathologiesController()

router.get('/',  
    authenticationMiddleware,
    authorizationMiddleware(["get-pathologies"]),
    pathologiesController.getAllPathologies
)

router.get('/query/:pquery',
    validationMiddleware(pqueryParam),
    authenticationMiddleware,
    authorizationMiddleware(["get-pathologies"]),
    pathologiesController.getPathologiesByQuery
)

router.get('/:pid',   
    validationMiddleware(pidParam),
    authenticationMiddleware,
    authorizationMiddleware(["get-pathology"]),
    pathologiesController.getPathologyById
)

export default router