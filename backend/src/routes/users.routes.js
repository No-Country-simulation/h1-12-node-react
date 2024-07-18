import { Router } from 'express'
import { UsersController } from '../controllers/users.controller.js'
import { authenticationMiddleware } from '../middlewares/authentication.middleware.js'
import { authorizationMiddleware } from '../middlewares/authorization.middleware.js'
import { validationMiddleware } from '../middlewares/validation.middleware.js'
import { uidParam, passwordSchema } from '../schemas/user.schema.js'

const router = Router()
const usersController = new UsersController()

router.get('/', 
    authenticationMiddleware,
    authorizationMiddleware(["get-users"]),
    usersController.getAllUsers)

router.get('/:uid', 
    validationMiddleware([uidParam]),
    authenticationMiddleware,
    authorizationMiddleware(["get-user"]),
    usersController.getUserById)

router.patch('/:uid/update-password', 
    validationMiddleware([uidParam, passwordSchema]),
    authenticationMiddleware,
    authorizationMiddleware(["update-user"]),
    usersController.updateUserPassword)

router.delete('/:uid',
    validationMiddleware([uidParam]),
    authenticationMiddleware,
    authorizationMiddleware(["delete-user"]),
    usersController.deleteUser)

export default router