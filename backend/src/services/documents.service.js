import { Document as TreatmentDocument } from "../database/models/index.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"
import { HttpError } from "../utils/http-error.util.js"

export class DocumentsService {

    getAll = async() => {
        const documents = await TreatmentDocument.findAll()
        return documents
    }

    getById = async(did) => {
        const document = await TreatmentDocument.findByPk(did)
        if(!document){
            throw new HttpError('Document not found', HTTP_CODES.NOT_FOUND)
        }
        return document
    }

    create = async(payload) => {
        const { treatment_id, date, description, link, type } = payload
        if(!treatment_id || !link){
            throw new HttpError('Missing data', HTTP_CODES.NOT_FOUND)
        }
        const newDocument = {
            treatment_id,
            date,
            description, 
            link,
            type
        }
        const document = await TreatmentDocument.create(newDocument)
        return document
    }

    update = async(did, payload) => {
        const { date, description, link, type } = payload
        const document = await this.getById(did)
        if(!date && !description && !link && !type){
            return
        }
        if(date){
            document.date = date
        }
        if(description){
            document.description = description
        }
        if(link){
            document.link = link
        }
        if(type){
            document.type = type
        }
        const updatedDocument = await document.save()
        return updatedDocument
    }


    delete = async(did) => {
        const document = await TreatmentDocument.findByPk(did)
        if(!document){
            throw new HttpError('Document not found', HTTP_CODES.NOT_FOUND)
        }
        const deletedDocument = await document.destroy()
        return deletedDocument
    }
}