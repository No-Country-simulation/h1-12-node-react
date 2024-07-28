import { NotificationsService } from "../services/notifications.service.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"
import { HttpError } from "../utils/http-error.util.js"

export class NotificationsController {

    constructor(){
        this.notificationsService = new NotificationsService()
    }

    getNotificationsByUserId = async (req, res, next) => {
        try {
            const notifications = await this.notificationsService.getByUserId(req.user.id)
            res.status(HTTP_CODES.SUCCESS).send(notifications)
        } catch (error) {
            next(error)
        }
    }

    createNotification = async (req, res, next) => {
        try {
            const newNotification = await this.notificationsService.create(req.body)
            res.status(HTTP_CODES.SUCCESS).send(newNotification)
        } catch (error) {
            next(error)
        }
    }

    updateNotification = async (req, res, next) => {
        const { nid } = req.params
        try {
            const updatedNotification = await this.notificationsService.update(nid, req.user.id, req.body)
            res.status(HTTP_CODES.SUCCESS).send(updatedNotification)
        } catch (error) {
            next(error)
        }
    }

    deleteNotification = async (req, res, next) => {
        const { nid } = req.params
        try {
            const deletedNotification = await this.notificationsService.delete(nid, req.user.id)
            res.status(HTTP_CODES.SUCCESS).send(deletedNotification)
        } catch (error) {
            next(error)
        }
    }

}