import { HealthInsurance } from "../database/models/healthinsurance.js"
import { Institution } from "../database/models/institution.js"
import { Patient } from "../database/models/patient.js"
import { Professional } from "../database/models/professional.js"
import { User } from "../database/models/user.js"
import { createHash } from "../utils/bcrypt.util.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"
import { HttpError } from "../utils/http-error.util.js"
import { RolesService } from "./roles.service.js"
import { UsersService } from "./users.service.js"

export class AuthService {

    constructor(){
        this.rolesService = new RolesService()
        this.usersService = new UsersService()
    }

    // este método crea al usuario, y llama a los otros métodos según el rol
    createUser = async(payload) => {
        const  { email, first_name, last_name, dni, role, speciality_id, resgistration_number, insurance_name, institution_name, institution_type } = payload
        if(!email || !first_name || !last_name){
            throw new HttpError('missing data', HTTP_CODES.BAD_REQUEST)
        }
        const existingPatient = await this.usersService.getByEmail(email)
        if(existingPatient){
            throw new HttpError('email already in use', HTTP_CODES.BAD_REQUEST)
        }
        const username = email.substring(0, email.indexOf('@'))
        const hashedPass = createHash(dni)
        const storedRole = await this.rolesService.getByName(role)
        const newUser = {
            email,
            password: hashedPass,
            username,
            first_name,
            last_name,
            dni,
            role_id: storedRole.id,
            updated_pass: false,
            phone: null,
            image: null,
            locality: null,
            province: null,
            address: null,
        }
        // Agregar transacciones para corrobrar creación correcta del paciente, etc. antes de crear el usuario
        const user = await User.create(newUser)
        let result
        switch (role) {
            case 'patient':
                result = await this.createPatient({ user_id: user.id, dni })
                newUser.patient_data = result
                break;
            case 'professional':
                result = await this.createProfessional({ user_id: user.id, speciality_id, resgistration_number })
                newUser.professional_data = result
                break
            case 'insurance':
                result = await this.createInsurance({ user_id: user.id, insurance_name })
                newUser.insurance_data = result
                break
            case 'institution':
                result = await this.createInstitution({ user_id: user.id, institution_name, institution_type })
                newUser.institution_data = result
                break
            default:
                break;
        }
        return newUser
    }

    createPatient = async({ user_id, dni }) => {
        if(!dni){
            throw new HttpError('missing data', HTTP_CODES.BAD_REQUEST)
        }
        const newPatient = {
            user_id,
            active_tratment: null,
            health_insurance_id: null,
            head_professional_id: null,
            sex: null,
            blood_factor: null,
            birthdate: null
        }
        const patient = await Patient.create(newPatient)
        return patient
    }

    createProfessional = async({ user_id, speciality_id, resgistration_number }) => {
        const newProfessional = {
            user_id,
            speciality_id: speciality_id || null,
            resgistration_number: resgistration_number || null
        }
        const professional = await Professional.create(newProfessional)
        return professional
    }

    createInsurance = async({ user_id, insurance_name }) => {
        if(!insurance_name){
            throw new HttpError('missing data', HTTP_CODES.BAD_REQUEST)
        }
        const newInsurance = {
            user_id,
            insurance_name,
        }
        const insurance = await HealthInsurance.create(newInsurance)
        return insurance
    }

    createInstitution = async({ user_id, institution_name, institution_type }) => {
        if(!institution_name || ! institution_type){
            throw new HttpError('missing data', HTTP_CODES.BAD_REQUEST)
        }
        const newInstitution = {
            user_id,
            institution_name,
            institution_type,
        }
        const institution = await Institution.create(newInstitution)
        return institution
    }
}