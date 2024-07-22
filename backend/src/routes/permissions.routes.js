import { Router } from 'express'
import { PermissionsController } from '../controllers/permissions.controller.js'
import { authenticationMiddleware } from '../middlewares/authentication.middleware.js'
import { authorizationMiddleware } from '../middlewares/authorization.middleware.js'
import { createPermissionSchema, pidParam, updatedPermissionSchema } from '../schemas/permission.schema.js'
import { validationMiddleware } from '../middlewares/validation.middleware.js'

const router = Router()
const permissionsController = new PermissionsController()

router.get('/', 
    authenticationMiddleware,
    authorizationMiddleware(["get-permissions"]),
    permissionsController.getAllPermissions
)

router.get('/:pid',
    validationMiddleware([pidParam]),
    authenticationMiddleware,
    authorizationMiddleware(["get-permission"]),
    permissionsController.getPermissionById
)

router.post('/', 
    validationMiddleware([createPermissionSchema]),
    authenticationMiddleware,
    authorizationMiddleware(["create-permission"]),
    permissionsController.createPermission
)

router.patch('/:pid', 
    validationMiddleware([pidParam, updatedPermissionSchema]),
    authenticationMiddleware,
    authorizationMiddleware(["update-role"]),
    permissionsController.updatePermission
)

router.delete('/:pid', 
    validationMiddleware([pidParam]),
    authenticationMiddleware,
    authorizationMiddleware(["delete-permission"]),
    permissionsController.deletePermission)

export default router