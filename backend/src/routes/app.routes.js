import { Router } from 'express'
import authRoutes from './auth.routes.js'
import rolesRoutes from './roles.routes.js'
import permissionsRoutes from './permissions.routes.js'

const router = Router()

router.use('/auth', authRoutes)
router.use('/roles', rolesRoutes)
router.use('/permissions', permissionsRoutes)


export default router