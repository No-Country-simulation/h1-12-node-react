import { Router } from 'express'
import { PathologiesController } from '../controllers/pathologies.controller.js'
import { authenticationMiddleware } from '../middlewares/authentication.middleware.js'
import { authorizationMiddleware } from '../middlewares/authorization.middleware.js'

const router = Router()
const pathologiesController = new PathologiesController()

router.get('/',  
    authenticationMiddleware,
    authorizationMiddleware(["get-pathologies"]),
    pathologiesController.getAllPathologies
)

router.get('/query/:pquery',
    authenticationMiddleware,
    authorizationMiddleware(["get-pathologies"]),
    pathologiesController.getPathologiesByQuery
)

router.get('/:pid',   
    authenticationMiddleware,
    authorizationMiddleware(["get-pathology"]),
    pathologiesController.getPathologyById
)

export default router