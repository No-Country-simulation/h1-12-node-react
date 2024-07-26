import { Router } from 'express'
import authRoutes from './auth.routes.js'
import usersRoutes from './users.routes.js'
import rolesRoutes from './roles.routes.js'
import permissionsRoutes from './permissions.routes.js'
import specialitiesRoutes from './specialities.routes.js'
import pathologiesRoutes from './pathologies.routes.js'
import medicationsRoutes from './medications.routes.js'
import treatmentsRoutes from './treatments.routes.js'
import documentsRoutes from './documents.routes.js'
import intakesRoutes from './intakes.routes.js'
import servicesRoutes from './services.routes.js'

const router = Router()

router.use('/auth', authRoutes)
router.use('/users', usersRoutes)
router.use('/roles', rolesRoutes)
router.use('/permissions', permissionsRoutes)
router.use('/specialities', specialitiesRoutes)
router.use('/pathologies', pathologiesRoutes)
router.use('/medications', medicationsRoutes)
router.use('/treatments', treatmentsRoutes)
router.use('/documents', documentsRoutes)
router.use('/intakes', intakesRoutes)
router.use('/services', servicesRoutes)


export default router