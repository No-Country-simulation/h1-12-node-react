import { Patient } from "../database/models/patient.js"
import { Professional } from "../database/models/professional.js"
import { Role } from "../database/models/role.js"
import { User } from "../database/models/user.js"
import { users, roles, patients, professionals } from "../mocks/data.mock.js"
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
        const  { email, first_name, last_name, dni, role } = payload
        if(!email || !first_name || !last_name || !dni){
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
                result = await this.createPatient(user.id)
                newUser.patient_data = result
                break;
            case 'professional':
                result = await this.createProfessional(user.id)
                newUser.professional_data = result
            default:
                break;
        }
        return newUser
    }

    createPatient = async(user_id) => {
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

    createProfessional = async(user_id) => {
        const newProfessional = {
            user_id,
            speciality_id: 1,
            resgistration_number: 12345
        }
        const professional = await Professional.create(newProfessional)
        return professional
    }
}