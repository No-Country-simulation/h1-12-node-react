import { PathologiesService } from "../services/pathologies.service.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"

export class PathologiesController {

    constructor(){
        this.pathologiesService = new PathologiesService()
    }

    getAllPathologies = async (req, res, next) => {
        try {
            const pathologies = await this.pathologiesService.getAll()
            res.status(HTTP_CODES.SUCCESS).send(pathologies)
        } catch (error) {
            next(error)
        }
    }

    getPathologiesByQuery = async (req, res, next) => {
        const { pquery } = req.params
        try {
            const pathology = await this.pathologiesService.getByQuery(pquery)
            res.status(HTTP_CODES.SUCCESS).send(pathology)
        } catch (error) {
            next(error)
        }
    }

    getPathologyById = async (req, res, next) => {
        const { pid } = req.params
        try {
            const pathology = await this.pathologiesService.getById(pid)
            res.status(HTTP_CODES.SUCCESS).send(pathology)
        } catch (error) {
            next(error)
        }
    }

}