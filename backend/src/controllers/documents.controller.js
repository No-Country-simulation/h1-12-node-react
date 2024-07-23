import { DocumentsService } from "../services/documents.service.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"

export class DocumentsController {

    constructor(){
        this.documentsService = new DocumentsService()
    }

    getAllDocuments = async (req, res, next) => {
        try {
            const documents = await this.documentsService.getAll()
            res.status(HTTP_CODES.SUCCESS).send(documents)
        } catch (error) {
            next(error)
        }
    }

    getDocumentById = async (req, res, next) => {
        const { did } = req.params
        try {
            const document = await this.documentsService.getById(did)
            res.status(HTTP_CODES.SUCCESS).send(document)
        } catch (error) {
            next(error)
        }
    }

    uploadDocument = async (req, res, next) => {
        const payload = req.body 
        if(req.file && req.file.path){
            payload.link = req.file.path
        }
        try {
            const document = await this.documentsService.create(payload)
            res.status(HTTP_CODES.CREATED).send(document)
        } catch (error) {
            next(error)
        }
    }

    updateDocument = async(req, res, next) => {
        const { did } = req.params
        const payload = req.body
        if(req.file && req.file.path){
            payload.image = req.file.path
        }
        try {
            const updatedDocument = await this.documentsService.update(did, payload)
            res.status(HTTP_CODES.SUCCESS).send(updatedDocument)
        } catch (error) {
            next(error)
        }
    }

    deleteDocument = async (req, res, next) => {
        const { did } = req.params
        try {
            const deletedDocument = await this.documentsService.delete(did)
            res.status(HTTP_CODES.SUCCESS).send(deletedDocument)
        } catch (error) {
            next(error)
        }
    }

}