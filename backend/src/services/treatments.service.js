import { Treatment } from "../database/models/index.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"
import { HttpError } from "../utils/http-error.util.js"
import { PathologiesService } from "./pathologies.service.js"
import { PatientsService } from "./patients.service.js"

export class TreatmentsService {

    constructor(){
        this.pathologiesService = new PathologiesService()
        this.patientsService = new PatientsService()
    }

    getAll = async () => {
        const treatments = await Treatment.findAll()
        return treatments
    }

    getById = async (tid) => {
        const treatment = await Treatment.findByPk(+tid)
        if(!treatment){
            throw new HttpError('Treatment not found', HTTP_CODES.NOT_FOUND)
        }
        return treatment
    }

    create = async (payload) => {
        const { pathology_id, patient_id, cycle, status, start_date, finish_date } = payload
        if(pathology_id){
            await this.pathologiesService.getById(+pathology_id)
        }
        if(patient_id){
            await this.patientsService.getById(+patient_id)
        }
        if(patient.dataValues.active_treatment){
            throw new HttpError('Patient has a current treatment', HTTP_CODES.BAD_REQUEST)
        }
        const newTreatment = {
            pathology_id: +pathology_id,
            patient_id: +patient_id,
            cycle,
            status,
            start_date, 
            finish_date
        }
        const treatment = await Treatment.create(newTreatment)
        await this.patientsService.updatePatient(patient_id, {active_treatment: treatment.id})
        return treatment
    }

    update = async(tid, payload) => {
        const { pathology_id, cycle, status, finish_date } = payload
        const treatment = await this.getById(+tid)
        if(pathology_id){
            await this.pathologiesService.getById(+pathology_id)
            treatment.pathology_id = +pathology_id
        }
        if(cycle){
            treatment.cycle = cycle
        }
        if(status){
            treatment.status = status
        }
        if(finish_date){
            treatment.finish_date = finish_date
        }

        const updatedTreatment = await treatment.save()
        return updatedTreatment
    }

    delete = async (tid) => {
        const treatment = await this.getById(tid)
        const deletedTreatment = await treatment.destroy()
        return deletedTreatment
    }
}