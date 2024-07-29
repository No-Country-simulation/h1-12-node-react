import { Router } from 'express'
import { UsersController } from '../controllers/users.controller.js'
import { authenticationMiddleware } from '../middlewares/authentication.middleware.js'
import { authorizationMiddleware } from '../middlewares/authorization.middleware.js'
import { validationMiddleware } from '../middlewares/validation.middleware.js'
import { uidParam, passwordSchema, updateUserSchema } from '../schemas/user.schema.js'
import { imageStorage } from '../utils/storage.util.js'
import multer from 'multer'
import { multerErrorMiddleware } from '../middlewares/multer-error.middleware.js'

const router = Router()
const usersController = new UsersController()
const upload = multer({ storage: imageStorage });


router.get('/', 
    authenticationMiddleware,
    authorizationMiddleware(["get-users"]),
    usersController.getAllUsers
)

router.patch('/update-password', 
    validationMiddleware([passwordSchema]),
    authenticationMiddleware,
    authorizationMiddleware(["update-user"]),
    usersController.updateUserPassword
)

router.get('/:uid', 
    validationMiddleware([uidParam]),
    authenticationMiddleware,
    authorizationMiddleware(["get-user"]),
    usersController.getUserById
)

router.patch('/:uid', 
    upload.single('image'),
    multerErrorMiddleware,
    validationMiddleware([updateUserSchema]),
    authenticationMiddleware,
    authorizationMiddleware(["update-user"]),
    usersController.updateUser
)

router.delete('/:uid',
    validationMiddleware([uidParam]),
    authenticationMiddleware,
    authorizationMiddleware(["delete-user"]),
    usersController.deleteUser
)

export default router