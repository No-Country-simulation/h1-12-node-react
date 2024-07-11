import { users, roles } from "../mocks/data.mock.js"
import { createHash } from "../utils/bcrypt.util.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"
import { HttpError } from "../utils/http-error.util.js"

const usersList = users
const rolesList = roles

export class AuthService {
    createPatient = async(email, password) => {
        if(!email || !password){
            throw new HttpError('missing data', HTTP_CODES.BAD_REQUEST)
        }
        const existingPatient = users.find(user => user.email === email)
        if(existingPatient){
            throw new HttpError('email already in use', HTTP_CODES.BAD_REQUEST)
        }
        const username = email.substring(0, email.indexOf('@'))
        const hashedPass = createHash(password)
        const { id } = rolesList.find(role => role.role_name === 'patient')
        const newUser = {
            id: usersList[usersList.length - 1].id + 1,
            email,
            password: hashedPass,
            username,
            role_id: id
        }
        usersList.push(newUser)
        return newUser
    }

    createProfessional = async(email, password) => {
        if(!email || !password){
            throw new HttpError('missing data', HTTP_CODES.BAD_REQUEST)
        }
        const existingDoctor = users.find(user => user.email === email)
        if(existingDoctor){
            throw new HttpError('email already in use', HTTP_CODES.BAD_REQUEST)
        }
        const username = email.substring(0, email.indexOf('@')) // hay que revisar lógica para evitar duplicados
        const hashedPass = createHash(password)
        const { id } = rolesList.find(role => role.role_name === 'professional')
        const newUser = {
            id: usersList[usersList.length - 1].id + 1,
            email,
            password: hashedPass,
            username,
            role_id: id
        }
        usersList.push(newUser)
        return newUser
    } 
}