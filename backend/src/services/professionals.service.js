import { Professional } from "../database/models/index.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"
import { HttpError } from "../utils/http-error.util.js"
import { JurisdictionsService } from "./jurisdictions.service.js"
import { SpecialitiesService } from "./specialities.service.js"

export class ProfessionalsService {

    constructor(){
        this.jurisdictionsService = new JurisdictionsService()
        this.specialitiesService = new SpecialitiesService()
    }

    findByUserId = async(uid) => {
        const professional = await Professional.findOne({ where: { user_id: +uid } })
        return professional
    }

    createProfessional = async({ user_id, speciality_id, registration_number, jurisdiction_id }) => {
        if(!user_id){
            throw new HttpError('missing data', HTTP_CODES.BAD_REQUEST)
        }
        const newProfessional = {
            user_id,
            speciality_id: speciality_id || null,
            registration_number: registration_number || null,
            jurisdiction_id: jurisdiction_id || null
        }
        const professional = await Professional.create(newProfessional)
        return professional
    }

    updateProfessional = async(uid, payload) => {
        if(!uid){
            throw new HttpError('Missing data', HTTP_CODES.BAD_REQUEST)
        }
        const { registration_number, speciality_id, jurisdiction_id } = payload
        if(!registration_number && !speciality_id && !jurisdiction_id){
            return
        }
        const professional = await this.findByUserId(uid)

        if(registration_number){
            professional.registration_number = registration_number
        }
        if(jurisdiction_id){
            professional.jurisdiction_id = jurisdiction_id
        }
        if(speciality_id){
            await this.specialitiesService.getById(speciality_id)
            professional.speciality_id = speciality_id
        }
        const updatedProfessional = await professional.save()
        return updatedProfessional
    }
}