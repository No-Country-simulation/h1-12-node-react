import { Speciality } from "../database/models/index.js"
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
        const { speciality_name } = payload
        const newSpeciality = {
            speciality_name
        }
        const speciality = await Speciality.create(newSpeciality)
        return speciality
    }

    update = async(rid, payload) => {
        const { speciality_name } = payload
        const speciality = await this.getById(rid)
        speciality.speciality_name = speciality_name
        const updatedSpecility = await speciality.save()
        return updatedSpecility
    }

    delete = async (sid) => {
        const speciality = await this.getById(sid)
        const deletedSpeciality = await speciality.destroy()
        return deletedSpeciality
    }
}