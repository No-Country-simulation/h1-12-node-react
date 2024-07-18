import { Router } from 'express'
import { RolesController } from '../controllers/roles.controller.js'
import { authenticationMiddleware } from '../middlewares/authentication.middleware.js'
import { authorizationMiddleware } from '../middlewares/authorization.middleware.js'
import { validationMiddleware } from '../middlewares/validation.middleware.js'
import { createRoleSchema, ridParam } from '../schemas/role.schema.js'

const router = Router()
const rolesController = new RolesController()

router.get('/', 
    authenticationMiddleware,
    authorizationMiddleware(["get-roles"]),
    rolesController.getAllRoles
)

router.get('/:rid', 
    validationMiddleware([ridParam]),
    authenticationMiddleware,
    authorizationMiddleware(["get-role"]),
    rolesController.getRoleById
)

router.post('/', 
    validationMiddleware([createRoleSchema]),
    authenticationMiddleware,
    authorizationMiddleware(["create-role"]),
    rolesController.createRole
)

router.delete('/:rid', 
    validationMiddleware([ridParam]),
    authenticationMiddleware,
    authorizationMiddleware(["delete-role"]),
    rolesController.deleteRole
)

export default router