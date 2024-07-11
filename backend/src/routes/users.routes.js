import { Router } from 'express'
import { UsersController } from '../controllers/users.controller.js'

const router = Router()
const usersController = new UsersController()

router.get('/', usersController.getAllUsers)
router.get('/:uid', usersController.getUserById)
router.post('/', usersController.createUser)
router.delete('/:uid', usersController.deleteUser)

export default router