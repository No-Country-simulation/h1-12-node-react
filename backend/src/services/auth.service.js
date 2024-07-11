import { users, roles, patients, professionals } from "../mocks/data.mock.js"
import { createHash } from "../utils/bcrypt.util.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"
import { HttpError } from "../utils/http-error.util.js"

export class AuthService {

    // este método crea al usuario, y llama a los otros métodos según el rol
    createUser = async(payload) => {
        const  { email, password, first_name, last_name, dni, role } = payload
        if(!email || !first_name || !last_name || !dni){
            throw new HttpError('missing data', HTTP_CODES.BAD_REQUEST)
        }
        const existingPatient = users.find(user => user.email === email)
        if(existingPatient){
            throw new HttpError('email already in use', HTTP_CODES.BAD_REQUEST)
        }
        const username = email.substring(0, email.indexOf('@'))
        const hashedPass = createHash(password)
        const storedRole = roles.find(roleItem => roleItem.role_name === role)
        const newUser = {
            id: users[users.length - 1].id + 1,
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
        users.push(newUser)
        let result
        switch (role) {
            case 'patient':
                result = await this.createPatient(newUser.id)
                newUser.patient_data = result
                break;
            case 'professional':
                result = await this.createProfessional(newUser.id)
                console.log(result)
                newUser.professional_data = result
            default:
                break;
        }
        return newUser
    }

    createPatient = async(user_id) => {
        const newPatient = {
            id: patients[patients.length - 1].id + 1,
            user_id,
            active_tratment: null,
            health_insurance_id: null,
            head_professional_id: null,
            sex: null,
            blood_factor: null,
            birthdate: null
        }
        patients.push(newPatient)
        return newPatient
    }

    createProfessional = async(user_id) => {
        const newProfessional = {
            id: professionals[professionals.length - 1].id + 1,
            user_id,
            speciality_id: 1,
            resgistration_number: 12345
        }
        patients.push(newProfessional)
        return newProfessional
    }
}