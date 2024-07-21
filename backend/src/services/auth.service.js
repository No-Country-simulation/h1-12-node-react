import { createHash } from "../utils/bcrypt.util.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"
import { HttpError } from "../utils/http-error.util.js"
import { InstitutionsService } from "./institution.service.js"
import { InsurancesService } from "./insurances.service.js"
import { PatientsService } from "./patients.service.js"
import { ProfessionalsService } from "./professionals.service.js"
import { RolesService } from "./roles.service.js"
import { UsersService } from "./users.service.js"
import { v4 } from "uuid"

export class AuthService {

    constructor(){
        this.rolesService = new RolesService()
        this.usersService = new UsersService()
        this.patientsService = new PatientsService()
        this.professionalsService = new ProfessionalsService()
        this.insurancesService = new InsurancesService()
        this.institutionsService = new InstitutionsService()
    }

    registerUser = async(payload) => {
        const  { email, first_name, last_name, dni, role, speciality_id, resgistration_number, insurance_name, institution_name, institution_type } = payload
        if(!email || !first_name || !last_name){
            throw new HttpError('missing data', HTTP_CODES.BAD_REQUEST)
        }
        const existingUser = await this.usersService.getByEmail(email)
        if(existingUser){
            throw new HttpError('email already in use', HTTP_CODES.BAD_REQUEST)
        }
        const username = email.substring(0, email.indexOf('@')).toUpperCase()
        const hashedPass = createHash(v4())
        const storedRole = await this.rolesService.getByName(role)
        const user = await this.usersService.createUser({ email, username, password: hashedPass, first_name, last_name, dni, role_id: storedRole.id })
        const userData = user.dataValues
        // Agregar transacciones para corrobrar creación correcta del paciente, etc. antes de crear el usuario
        let result
        switch (role) {
            case 'patient':
                result = await this.patientsService.createPatient({ user_id: user.id })
                userData.patient_data = result
                break;
            case 'professional':
                result = await this.professionalsService.createProfessional({ user_id: user.id, speciality_id, resgistration_number })
                userData.professional_data = result
                break
            case 'insurance':
                result = await this.insurancesService.createInsurance({ user_id: user.id, insurance_name })
                userData.insurance_data = result
                break
            case 'institution':
                result = await this.institutionsService.createInstitution({ user_id: user.id, institution_name, institution_type })
                userData.institution_data = result
                break
            default:
                break;
        }
        return userData
    }
}