import { Router } from 'express'
import { RolesController } from '../controllers/roles.controller.js'
import { authenticationMiddleware } from '../middlewares/authentication.middleware.js'
import { authorizationMiddleware } from '../middlewares/authorization.middleware.js'

const router = Router()
const rolesController = new RolesController()

router.get('/', 
    authenticationMiddleware,
    authorizationMiddleware(["get-roles"]),
    rolesController.getAllRoles)
router.get('/:rid', 
    authenticationMiddleware,
    authorizationMiddleware(["get-role"]),
    rolesController.getRoleById)
router.post('/', 
    authenticationMiddleware,
    authorizationMiddleware(["create-role"]),
    rolesController.createRole)
router.delete('/:rid', 
    authenticationMiddleware,
    authorizationMiddleware(["delete-role"]),
    rolesController.deleteRole)

export default router