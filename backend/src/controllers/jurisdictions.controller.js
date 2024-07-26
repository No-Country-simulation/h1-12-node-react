import { JurisdictionsService } from "../services/jurisdictions.service.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"

export class JurisdictionsController {

    constructor(){
        this.jurisdictionsService = new JurisdictionsService()
    }

    getAllJurisdictions = async (req, res, next) => {
        try {
            const jurisdictions = await this.jurisdictionsService.getAll()
            res.status(HTTP_CODES.SUCCESS).send(jurisdictions)
        } catch (error) {
            next(error)
        }
    }

}