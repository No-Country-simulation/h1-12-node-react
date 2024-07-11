import { Speciality } from "../database/models/speciality.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"
import { HttpError } from "../utils/http-error.util.js"

export class SpecialitiesService {
    getAll = async () => {
        const specialities = await Speciality.findAll()
        return specialities
    }

    getById = async (sid) => {
        const speciality = await Speciality.findByPk(+sid)
        if(!speciality){
            throw new HttpError('Speciality not found', HTTP_CODES.NOT_FOUND)
        }
        return speciality
    }

    create = async (payload) => {
        const { name } = payload
        const newSpeciality = {
            name
        }
        const speciality = await Speciality.create(newSpeciality)
        return speciality
    }

    delete = async (sid) => {
        const speciality = await this.getById(sid)
        const deletedSpeciality = await speciality.destroy()
        return deletedSpeciality
    }
}