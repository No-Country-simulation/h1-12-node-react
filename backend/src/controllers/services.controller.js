import { ServicesService } from "../services/services.service.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"

export class ServicesController {

    constructor(){
        this.servicesService = new ServicesService()
    }

    getAllServices = async (req, res, next) => {
        try {
            const services = await this.servicesService.getAll()
            res.status(HTTP_CODES.SUCCESS).send(services)
        } catch (error) {
            next(error)
        }
    }

    getServiceById = async (req, res, next) => {
        const { sid } = req.params
        try {
            const service = await this.servicesService.getById(sid)
            res.status(HTTP_CODES.SUCCESS).send(service)
        } catch (error) {
            next(error)
        }
    }

}