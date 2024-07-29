import { Router } from 'express'
import { NotificationsController } from '../controllers/notifications.controller.js'
import { authenticationMiddleware } from '../middlewares/authentication.middleware.js' 
import { authorizationMiddleware } from '../middlewares/authorization.middleware.js'
import { validationMiddleware } from '../middlewares/validation.middleware.js'
import { createNotificationSchema, nidParam, updateNotificationSchema } from '../schemas/notification.schema.js'
import { uidParam } from '../schemas/user.schema.js'

const router = Router()
const notificationsController = new NotificationsController()

router.get('/',
    authenticationMiddleware,
    authorizationMiddleware(["get-notifications"]),
    notificationsController.getNotificationsByUserId
)

router.post('/',
    validationMiddleware([createNotificationSchema]),
    authorizationMiddleware(["create-notification"]),
    authenticationMiddleware,
    notificationsController.createNotification
)

router.patch('/:nid',
    validationMiddleware([updateNotificationSchema, nidParam]),
    authorizationMiddleware(["update-notification"]),
    authenticationMiddleware,
    notificationsController.updateNotification
)

router.delete('/:nid',
    validationMiddleware([nidParam]),
    authorizationMiddleware(["delete-notification"]),
    authenticationMiddleware,
    notificationsController.deleteNotification
)

export default router