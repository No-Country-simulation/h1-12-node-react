import { MedicationTreatments, Treatment } from "../database/models/index.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"
import { HttpError } from "../utils/http-error.util.js"
import { IntakesService } from "./intakes.service.js"
import { MedicationsService } from "./medications.service.js"
import { PathologiesService } from "./pathologies.service.js"
import { PatientsService } from "./patients.service.js"

export class TreatmentsService {

    constructor(){
        this.pathologiesService = new PathologiesService()
        this.patientsService = new PatientsService()
        this.medicationsService = new MedicationsService()
        this.intakesService = new IntakesService()
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
            await this.patientsService.getById(patient_id)
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
        return treatment
    }

    update = async(tid, payload) => {
        const { pathology_id, cycle, status, finish_date } = payload
        const treatment = await this.getById(tid)
        if(pathology_id){
            await this.pathologiesService.getById(pathology_id)
            treatment.pathology_id = pathology_id
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

    addMedicaton = async(tid, mid, payload) => {
        const { start_date, finish_date, description, dosage, period } = payload
        const treatment = await this.getById(tid)
        const medication = await this.medicationsService.getById(mid)
        const medication_treatment = await MedicationTreatments.create({
            treatment_id: treatment.id,
            medication_id: medication.id,
            start_date,
            finish_date,
            description,
            dosage,
            period,
            suspended: false
        })

        const startDate = new Date(start_date);
        const finishDate = new Date(finish_date);
        const periodInMilliseconds = period * 60 * 60 * 1000;

        for (let intakeTime = startDate; intakeTime <= finishDate; intakeTime = new Date(intakeTime.getTime() + periodInMilliseconds)) {
            await this.intakesService.create({
                medication_treatment_id: medication_treatment.id,
                date: intakeTime,
            });
        }
        return medication_treatment
    }

    delete = async (tid) => {
        const treatment = await this.getById(tid)
        const deletedTreatment = await treatment.destroy()
        return deletedTreatment
    }
}