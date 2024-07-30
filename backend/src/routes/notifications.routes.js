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
    authenticationMiddleware,
    authorizationMiddleware(["create-notification"]),
    notificationsController.createNotification
)

router.patch('/:nid',
    validationMiddleware([updateNotificationSchema, nidParam]),
    authenticationMiddleware,
    authorizationMiddleware(["update-notification"]),
    notificationsController.updateNotification
)

router.delete('/:nid',
    validationMiddleware([nidParam]),
    authenticationMiddleware,
    authorizationMiddleware(["delete-notification"]),
    notificationsController.deleteNotification
)

export default router