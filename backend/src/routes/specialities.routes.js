import { Router } from 'express'
import { SpecialitiesController } from '../controllers/specialities.controller.js'
import { authenticationMiddleware } from '../middlewares/authentication.middleware.js'
import { authorizationMiddleware } from '../middlewares/authorization.middleware.js'
import { createSpecialitySchema, sidParam, updateSpecialitySchema } from '../schemas/speciality.schema.js'
import { validationMiddleware } from '../middlewares/validation.middleware.js'

const router = Router()
const specialitiesController = new SpecialitiesController()

router.get('/',  
    authenticationMiddleware,
    authorizationMiddleware(["get-specialities"]),
    specialitiesController.getAllSpecialities
)

router.get('/:sid',   
    validationMiddleware([sidParam]),
    authenticationMiddleware,
    authorizationMiddleware(["get-speciality"]),
    specialitiesController.getSpecialityById
)

router.post('/',   
    validationMiddleware([createSpecialitySchema]),
    authenticationMiddleware,
    authorizationMiddleware(["create-speciality"]),
    specialitiesController.createSpeciality
)

router.patch('/:sid', 
    validationMiddleware([sidParam, updateSpecialitySchema]),
    authenticationMiddleware,
    authorizationMiddleware(["update-role"]),
    specialitiesController.updateSpeciality
)

router.delete('/:sid',   
    validationMiddleware([sidParam]),
    authenticationMiddleware,
    authorizationMiddleware(["delete-speciality"]),
    specialitiesController.deleteSpeciality
)

export default router