import { HealthInsurance } from "../database/models/index.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"
import { HttpError } from "../utils/http-error.util.js"

export class InsurancesService {

    constructor(){}

    findByUserId = async(uid) => {
        const insurance = await HealthInsurance.findOne({ where: { user_id: +uid } })
        return insurance
    }

    createInsurance = async({ user_id, insurance_name }) => {
        if(!user_id || !insurance_name){
            throw new HttpError('missing data', HTTP_CODES.BAD_REQUEST)
        }
        const newInsurance = {
            user_id,
            insurance_name,
        }
        const insurance = await HealthInsurance.create(newInsurance)
        return insurance
    }

    updateInsurance = async(uid, payload) => {
        if(!uid){
            throw new HttpError('Missing data', HTTP_CODES.BAD_REQUEST)
        }
        const { insurance_name } = payload
        if(!insurance_name){
            return
        }
        const insurance = await this.findByUserId(uid)

        insurance.insurance_name = insurance_name

        const updatedInsurance = await insurance.save()
        return updatedInsurance
    }
}