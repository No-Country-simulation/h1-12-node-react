import { Pathology } from "../database/models/pathology.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"
import { HttpError } from "../utils/http-error.util.js"
import { Op } from "sequelize"

export class PathologiesService {
    getAll = async () => {
        const pathologies = await Pathology.findAll()
        return pathologies
    }

    getByQuery = async (pquery) => {
        const pathology = await Pathology.findAll({ where: { pathology_name: { [Op.like]: `%${pquery}%` } } })
        if(!pathology){
            throw new HttpError('Pathologies not found', HTTP_CODES.NOT_FOUND)
        }
        return pathology
    }

    getById = async (pid) => {
        const pathology = await Pathology.findByPk(pid)
        if(!pathology){
            throw new HttpError('Pathology not found', HTTP_CODES.NOT_FOUND)
        }
        return pathology
    }
}