import { Consultation } from "../database/models/index.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"
import { HttpError } from "../utils/http-error.util.js"

export class ConsultationsService {

    getAll = async() => {
        const consultations = await Consultation.findAll()
        return consultations
    }

    getById = async(cid) => {
        const consultation = await Consultation.findByPk(cid)
        if(!consultation){
            throw new HttpError('Consultation not found', HTTP_CODES.NOT_FOUND)
        }
        return consultation
    }

    create = async(payload) => {
        const { patient_id, professional_id, description, date } = payload
        if(!patient_id || !professional_id || !date){
            throw new HttpError('Missing data', HTTP_CODES.NOT_FOUND)
        }
        const newConsultation = {
            patient_id,
            professional_id,
            description, 
            date,
            status: 'created'
        }
        const consultation = await Consultation.create(newConsultation)
        return consultation
    }

    update = async(cid, payload) => {
        const { date, description, status } = payload
        const consultation = await this.getById(cid)
        if(!date && !description && !status){
            return
        }
        if(date){
            consultation.date = date
        }
        if(description){
            consultation.description = description
        }
        if(status){
            consultation.status = status
        }
        const updatedConsultation = await consultation.save()
        return updatedConsultation
    }


    delete = async(cid) => {
        const consultation = await Consultation.findByPk(cid)
        if(!consultation){
            throw new HttpError('Consultation not found', HTTP_CODES.NOT_FOUND)
        }
        const deletedConsultation = await consultation.destroy()
        return deletedConsultation
    }
}