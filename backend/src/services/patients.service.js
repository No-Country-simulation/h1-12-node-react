import { Consultation, Intake, MedicationTreatments, Patient, Treatment } from "../database/models/index.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"
import { HttpError } from "../utils/http-error.util.js"

export class PatientsService {

    constructor(){}

    getById = async (pid) => {
        const patient = await Patient.findByPk(pid)
        if(!patient){
            throw new HttpError('Patient not found', HTTP_CODES.NOT_FOUND)
        }
        return patient
    }

    getStatistics = async(pid) => {
        await this.getById(pid)
        const userConsultations = await Consultation.findAll({
          where: {
            patient_id: pid
          }
        })
        const userIntakes = await Intake.findAll({
            include: {
                model: MedicationTreatments,
                as: 'medication_treatment',
                include: {
                    model: Treatment,
                    as: 'treatment',
                    where: {
                        patient_id: pid
                    }
                }
            }
        })
        const consultations = {
            created: 0,
            accepted: 0,
            denied: 0,
            finished: 0,
            total: userConsultations.length
        }
        for(let i = 0; i < userConsultations.length; i ++){
            switch (userConsultations[i].dataValues.status) {
                case 'created':
                    consultations.created ++
                    break;
                case 'accepted':
                    consultations.accepted ++
                    break;
                case 'denied':
                    consultations.denied ++
                    break;
                case 'finished':
                    consultations.finished ++
                    break;
                default:
                    break;
            }
        }
        const intakes = {
            taken: 0,
            pending: 0,
            notTaken: 0,
            total: userIntakes.length
        }
        for(let i = 0; i < userIntakes.length; i ++){
            if(userIntakes[i].dataValues.taken){
                intakes.taken ++
            }else{
                if(new Date(userIntakes[i].dataValues.date) > new Date()){
                    intakes.pending ++
                }else{
                    intakes.notTaken ++
                }
            }
        }
        const patientStatistics = {
            consultations,
            intakes
        }
        return patientStatistics
    }

    findByUserId = async(uid) => {
        const patient = await Patient.findOne({ where: { user_id: +uid } })
        return patient
    }

    createPatient = async(payload) => {
        const { user_id } = payload;
        if(!user_id){
            throw new HttpError('Missing data', HTTP_CODES.BAD_REQUEST)
        }
        const newPatient = {
            user_id,
            health_insurance_id: null,
            head_professional_id: null,
            sex: null,
            blood_factor: null,
            birthdate: null
        }
        const patient = await Patient.create(newPatient)
        return patient
    }

    updatePatient = async(uid, payload) => {
        if(!uid){
            throw new HttpError('Missing data', HTTP_CODES.BAD_REQUEST)
        }
        const { sex, blood_factor, birthdate } = payload
        if(!sex && !blood_factor && !birthdate){
            return
        }
        const patient = await this.findByUserId(uid)
        if(!patient){
            throw new HttpError('Patient not found', HTTP_CODES.NOT_FOUND)
        }
        if(sex){
            patient.sex = sex
        }
        if(blood_factor){
            patient.blood_factor = blood_factor
        }
        if(birthdate){
            patient.birthdate = new Date(birthdate)
        }
        const updatedPatient = await patient.save()
        return updatedPatient
    }
}