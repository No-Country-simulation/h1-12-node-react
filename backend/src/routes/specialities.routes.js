import { Router } from 'express'
import { SpecialitiesController } from '../controllers/specialities.controller.js'

const router = Router()
const specialitiesController = new SpecialitiesController()

router.get('/', specialitiesController.getAllSpecialities)
router.get('/:sid', specialitiesController.getSpecialityById)
router.post('/', specialitiesController.createSpeciality)
router.delete('/:sid', specialitiesController.deleteSpeciality)

export default router