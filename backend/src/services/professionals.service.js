import { Professional } from "../database/models/index.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"
import { HttpError } from "../utils/http-error.util.js"

export class ProfessionalsService {

    constructor(){}

    findByUserId = async(uid) => {
        const professional = await Professional.findOne({ where: { user_id: +uid } })
        return professional
    }

    createProfessional = async({ user_id, speciality_id, registration_number }) => {
        if(!user_id){
            throw new HttpError('missing data', HTTP_CODES.BAD_REQUEST)
        }
        const newProfessional = {
            user_id,
            speciality_id: speciality_id || null,
            registration_number: registration_number || null
        }
        const professional = await Professional.create(newProfessional)
        return professional
    }

    updateProfessional= async(uid, payload) => {
        if(!uid){
            throw new HttpError('Missing data', HTTP_CODES.BAD_REQUEST)
        }
        const { registration_number, speciality_id } = payload
        if(!registration_number && !speciality_id){
            return
        }
        const professional = await this.findByUserId(uid)

        if(registration_number){
            professional.registration_number = +registration_number
        }
        if(speciality_id){
            professional.speciality_id = +speciality_id
        }
        const updatedProfessional = await professional.save()
        return updatedProfessional
    }
}