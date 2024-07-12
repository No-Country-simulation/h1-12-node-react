import { Patient } from "../database/models/patient.js"
import { Professional } from "../database/models/professional.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"
import { HttpError } from "../utils/http-error.util.js"

export class ProfessionalsService {

    constructor(){}

    createProfessional = async({ user_id, speciality_id, resgistration_number }) => {
        if(!user_id){
            throw new HttpError('missing data', HTTP_CODES.BAD_REQUEST)
        }
        const newProfessional = {
            user_id,
            speciality_id: speciality_id || null,
            resgistration_number: resgistration_number || null
        }
        const professional = await Professional.create(newProfessional)
        return professional
    }
}