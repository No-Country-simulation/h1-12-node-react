import { ConsultationsService } from "../services/consultations.service.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"
import { HttpError } from "../utils/http-error.util.js"

export class ConsultationsController {

    constructor(){
        this.consultationsService = new ConsultationsService()
    }

    getAllConsultations = async (req, res, next) => {
        try {
            const consultations = await this.consultationsService.getAll()
            res.status(HTTP_CODES.SUCCESS).send(consultations)
        } catch (error) {
            next(error)
        }
    }

    getConsultationById = async (req, res, next) => {
        const { cid } = req.params
        try {
            const consultation = await this.consultationsService.getById(cid)
            res.status(HTTP_CODES.SUCCESS).send(consultation)
        } catch (error) {
            next(error)
        }
    }

    createConsultation = async (req, res, next) => {
        const payload = req.body
        try {
            const consultation = await this.consultationsService.create(payload)
            res.status(HTTP_CODES.CREATED).send(consultation)
        } catch (error) {
            next(error)
        }
    }

    uploadConsultation = async (req, res, next) => {
        const payload = req.body 
        try {
            const consultation = await this.consultationsService.create(payload)
            res.status(HTTP_CODES.CREATED).send(consultation)
        } catch (error) {
            next(error)
        }
    }

    updateConsultation = async(req, res, next) => {
        const { cid } = req.params
        const payload = req.body
        if(req.file && req.file.path){
            payload.link = req.file.path
        }
        try {
            const updatedConsultation = await this.consultationsService.update(cid, payload)
            res.status(HTTP_CODES.SUCCESS).send(updatedConsultation)
        } catch (error) {
            next(error)
        }
    }

    deleteConsultation = async (req, res, next) => {
        const { cid } = req.params
        try {
            const deletedConsultation = await this.consultationsService.delete(cid)
            res.status(HTTP_CODES.SUCCESS).send(deletedConsultation)
        } catch (error) {
            next(error)
        }
    }

}