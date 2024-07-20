import { Router } from 'express'
import { UsersController } from '../controllers/users.controller.js'
import { authenticationMiddleware } from '../middlewares/authentication.middleware.js'
import { authorizationMiddleware } from '../middlewares/authorization.middleware.js'
import { validationMiddleware } from '../middlewares/validation.middleware.js'
import { uidParam, passwordSchema } from '../schemas/user.schema.js'
import { storage } from '../utils/storage.util.js'
import multer from 'multer'

const router = Router()
const usersController = new UsersController()
const upload = multer({ storage: storage });


router.get('/', 
    authenticationMiddleware,
    authorizationMiddleware(["get-users"]),
    usersController.getAllUsers
)

router.get('/:uid', 
    validationMiddleware([uidParam]),
    authenticationMiddleware,
    authorizationMiddleware(["get-user"]),
    usersController.getUserById
)

router.patch('/:uid', 
    // validationMiddleware([userSchema]),
    upload.single('image'),
    authenticationMiddleware,
    authorizationMiddleware(["update-user"]),
    usersController.updateUser
)

router.patch('/update-password', 
    validationMiddleware([passwordSchema]),
    authenticationMiddleware,
    authorizationMiddleware(["update-user"]),
    usersController.updateUserPassword
)

router.delete('/:uid',
    validationMiddleware([uidParam]),
    authenticationMiddleware,
    authorizationMiddleware(["delete-user"]),
    usersController.deleteUser
)

export default router