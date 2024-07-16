import { Router } from 'express'
import { PermissionsController } from '../controllers/permissions.controller.js'

const router = Router()
const permissionsController = new PermissionsController()

router.get('/', permissionsController.getAllPermissions)
router.get('/:pid', permissionsController.getPermissionById)
router.post('/', permissionsController.createPermission)
router.delete('/:pid', permissionsController.deletePermission)

export default router