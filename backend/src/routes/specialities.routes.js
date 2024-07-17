import { Router } from 'express'
import { SpecialitiesController } from '../controllers/specialities.controller.js'
import { authenticationMiddleware } from '../middlewares/authentication.middleware.js'
import { authorizationMiddleware } from '../middlewares/authorization.middleware.js'

const router = Router()
const specialitiesController = new SpecialitiesController()

router.get('/',  
    authenticationMiddleware,
    authorizationMiddleware(["get-specialities"]),
    specialitiesController.getAllSpecialities
)

router.get('/:sid',   
    authenticationMiddleware,
    authorizationMiddleware(["get-speciality"]),
    specialitiesController.getSpecialityById
)

router.post('/',   
    authenticationMiddleware,
    authorizationMiddleware(["create-speciality"]),
    specialitiesController.createSpeciality
)

router.delete('/:sid',   
    authenticationMiddleware,
    authorizationMiddleware(["delete-speciality"]),
    specialitiesController.deleteSpeciality
)

export default router