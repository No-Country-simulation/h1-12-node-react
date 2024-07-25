import { SpecialitiesService } from "../services/specialities.service.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"

export class SpecialitiesController {

    constructor(){
        this.specialitiesService = new SpecialitiesService()
    }

    getAllSpecialities = async (req, res, next) => {
        try {
            const specialities = await this.specialitiesService.getAll()
            res.status(HTTP_CODES.SUCCESS).send(specialities)
        } catch (error) {
            next(error)
        }
    }

    getSpecialityById = async (req, res, next) => {
        const { sid } = req.params
        try {
            const speciality = await this.specialitiesService.getById(sid)
            res.status(HTTP_CODES.SUCCESS).send(speciality)
        } catch (error) {
            next(error)
        }
    }

    createSpeciality = async (req, res, next) => {
        const payload = req.body
        try {
            const speciality = await this.specialitiesService.create(payload)
            res.status(HTTP_CODES.CREATED).send(speciality)
        } catch (error) {
            next(error)
        }
    }

    updateSpeciality = async (req, res, next) => {
        const payload = req.body
        const { sid } = req.params
        try {
            const updatedSpeciality = await this.specialitiesService.update(sid, payload)
            res.status(HTTP_CODES.SUCCESS).send(updatedSpeciality)
        } catch (error) {
            next(error)
        } 
    }

    deleteSpeciality = async (req, res, next) => {
        const { sid } = req.params
        try {
            const deletedSpeciality = await this.specialitiesService.delete(sid)
            res.status(HTTP_CODES.SUCCESS).send(deletedSpeciality)
        } catch (error) {
            next(error)
        }
    }

}