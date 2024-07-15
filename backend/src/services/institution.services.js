import { HealthInsurance } from "../database/models/healthinsurance.js"
import { Institution } from "../database/models/institution.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"
import { HttpError } from "../utils/http-error.util.js"

export class InstitutionsService {

    constructor(){}

    createInstitution = async({ user_id, institution_name, institution_type }) => {
        if(!institution_name || ! institution_type){
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
}