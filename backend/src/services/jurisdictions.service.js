import { Jurisdiction } from "../database/models/index.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"
import { HttpError } from "../utils/http-error.util.js"

export class JurisdictionsService {
    getAll = async () => {
        const jurisdictions = await Jurisdiction.findAll()
        return jurisdictions
    }
}