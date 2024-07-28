import { Institution } from "../database/models/index.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"
import { HttpError } from "../utils/http-error.util.js"

export class InstitutionsService {

    constructor(){}

    findByUserId = async(uid) => {
        const institution = await Institution.findOne({ where: { user_id: +uid } })
        return institution
    }

    createInstitution = async({ user_id, institution_name, institution_type }) => {
        if(!institution_name || !institution_type){
            throw new HttpError('missing data', HTTP_CODES.BAD_REQUEST)
        }
        const newInstitution = {
            user_id,
            institution_name,
            institution_type,
        }
        const institution = await Institution.create(newInstitution)
        return institution
    }

    updateInstitution= async(uid, payload) => {
        if(!uid){
            throw new HttpError('Missing data', HTTP_CODES.BAD_REQUEST)
        }
        const { institution_name } = payload
        if(!institution_name){
            return
        }
        const institution = await this.findByUserId(uid)

        institution.institution_name = institution_name

        const updatedInstitution = await institution.save()
        return updatedInstitution
    }
}