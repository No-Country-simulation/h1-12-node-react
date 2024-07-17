import { Router } from 'express'
import { PermissionsController } from '../controllers/permissions.controller.js'
import { authenticationMiddleware } from '../middlewares/authentication.middleware.js'
import { authorizationMiddleware } from '../middlewares/authorization.middleware.js'

const router = Router()
const permissionsController = new PermissionsController()

router.get('/', 
    authenticationMiddleware,
    authorizationMiddleware(["get-permissions"]),
    permissionsController.getAllPermissions
)

router.get('/:pid', 
    authenticationMiddleware,
    authorizationMiddleware(["get-permission"]),
    permissionsController.getPermissionById
)

router.post('/', 
    authenticationMiddleware,
    authorizationMiddleware(["create-permission"]),
    permissionsController.createPermission
)

router.delete('/:pid', 
    authenticationMiddleware,
    authorizationMiddleware(["delete-permission"]),
    permissionsController.deletePermission)

export default router