import { Router } from 'express'
import { RolesController } from '../controllers/roles.controller.js'

const router = Router()
const rolesController = new RolesController()

router.get('/', rolesController.getAllRoles)
router.get('/:rid', rolesController.getRoleById)
router.post('/', rolesController.createRole)
router.delete('/:rid', rolesController.deleteRole)

export default router