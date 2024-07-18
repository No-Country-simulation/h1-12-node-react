import { Router } from 'express'
import { UsersController } from '../controllers/users.controller.js'
import { authenticationMiddleware } from '../middlewares/authentication.middleware.js'
import { authorizationMiddleware } from '../middlewares/authorization.middleware.js'

const router = Router()
const usersController = new UsersController()

router.get('/', 
    authenticationMiddleware,
    authorizationMiddleware(["get-users"]),
    usersController.getAllUsers)

router.get('/:uid', 
    authenticationMiddleware,
    authorizationMiddleware(["get-user"]),
    usersController.getUserById)

router.patch('/:uid/update-password', 
    authenticationMiddleware,
    authorizationMiddleware(["update-user"]),
    usersController.updateUserPassword)

router.delete('/:uid',
    authenticationMiddleware,
    authorizationMiddleware(["delete-user"]),
    usersController.deleteUser)

export default router