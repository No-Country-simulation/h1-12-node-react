import { HealthInsurance } from "../database/models/healthinsurance.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"
import { HttpError } from "../utils/http-error.util.js"

export class InsurancesService {

    constructor(){}

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
}