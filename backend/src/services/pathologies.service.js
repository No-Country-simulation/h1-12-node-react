import { Pathology } from "../database/models/index.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"
import { HttpError } from "../utils/http-error.util.js"
import { Op } from "sequelize"

export class PathologiesService {
    getAll = async () => {
        const pathologies = await Pathology.findAll()
        return pathologies
    }

    getByQuery = async (pquery) => {
        const pathologies = await Pathology.findAll({ where: { pathology_name: { [Op.like]: `%${pquery}%` } } })
        if(!pathologies){
            throw new HttpError('Pathologies not found', HTTP_CODES.NOT_FOUND)
        }
        return pathologies
    }

    getById = async (pid) => {
        const pathology = await Pathology.findByPk(pid)
        if(!pathology){
            throw new HttpError('Pathology not found', HTTP_CODES.NOT_FOUND)
        }
        return pathology
    }
}