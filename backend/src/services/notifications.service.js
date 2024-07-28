import { Notification} from "../database/models/index.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"
import { HttpError } from "../utils/http-error.util.js"

export class NotificationsService{

    getByUserId = async(uid) => {
        const notifications = await Notification.findAll({where: { user_id: uid }})
        return notifications
    }

    create = async(payload) => {
        const { user_id, content } = payload
        if(!user_id || !content){
            throw new HttpError('Missing data', HTTP_CODES.NOT_FOUND)
        }
        const newNotification = {
            user_id,
            content,
            date: new Date(),
            read: false
        }
        const notification = await Notification.create(newNotification)
        return notification
    }

    update = async(nid, uid, payload) => {
        const notification = await Notification.findByPk(+nid)
        if(!notification){
            throw new HttpError('Notification not found', HTTP_CODES.NOT_FOUND)
        }
        if(notification.user_id !== uid){
            throw new HttpError('Unauthorized', HTTP_CODES.UNAUTHORIZED)
        }
        notification.read = payload.read
        const updatedNotification = await notification.save()
        return updatedNotification
    }

    delete = async(nid, uid) => {
        const notification = await Notification.findByPk(+nid)
        if(!notification){
            throw new HttpError('Notification not found', HTTP_CODES.NOT_FOUND)
        }
        if(notification.user_id !== uid){
            throw new HttpError('Unauthorized', HTTP_CODES.UNAUTHORIZED)
        }
        const deletedNotification = await notification.destroy()
        return deletedNotification
    }
}