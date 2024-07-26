import { Router } from 'express'
import { JurisdictionsController } from '../controllers/jurisdictions.controller.js'
import { authenticationMiddleware } from '../middlewares/authentication.middleware.js'
import { authorizationMiddleware } from '../middlewares/authorization.middleware.js'

const router = Router()
const jurisdictionsController = new JurisdictionsController()

router.get('/',
    authenticationMiddleware,
    authorizationMiddleware(["get-jurisdictions"]),
    jurisdictionsController.getAllJurisdictions
)

export default router