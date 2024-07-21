import { Router } from 'express'
import authRoutes from './auth.routes.js'
import usersRoutes from './users.routes.js'
import rolesRoutes from './roles.routes.js'
import permissionsRoutes from './permissions.routes.js'
import specialitiesRoutes from './specialities.routes.js'
import pathologiesRoutes from './pathologies.routes.js'
import medicationsRoutes from './medications.routes.js'

const router = Router()

router.use('/auth', authRoutes)
router.use('/users', usersRoutes)
router.use('/roles', rolesRoutes)
router.use('/permissions', permissionsRoutes)
router.use('/specialities', specialitiesRoutes)
router.use('/pathologies', pathologiesRoutes)
router.use('/medications', medicationsRoutes)


export default router