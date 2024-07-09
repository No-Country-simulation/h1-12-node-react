import { users } from "../mocks/users.js"
import { createHash } from "../utils/bcrypt.util.js"
import { HttpError } from "../utils/http-error.util.js"

const usersList = users

export class AuthService {
    createPatient = async(email, password) => {
        if(!email || !password){
            throw new HttpError('missing data', 400)
        }
        const existingPatient = users.find(user => user.email === email)
        if(existingPatient){
            throw new HttpError('email already in use', 400)
        }
        const username = email.substring(0, email.indexOf('@'))
        const hashedPass = createHash(password)
        const newUser = {
            id: usersList[usersList.length - 1].id + 1,
            email,
            hashedPass,
            username,
            role: 'patient'
        }
        usersList.push(newUser)
        return newUser
    }

    createDoctor = async(email, password) => {
        if(!email || !password){
            throw new HttpError('missing data', 400)
        }
        const existingDoctor = users.find(user => user.email === email)
        if(existingDoctor){
            throw new HttpError('email already in use', 400)
        }
        const username = email.substring(0, email.indexOf('@')) // hay que revisar lógica para evitar duplicados
        const hashedPass = createHash(password)
        const newUser = {
            id: usersList[usersList.length - 1].id + 1,
            email,
            hashedPass,
            username,
            role: 'doctor'
        }
        usersList.push(newUser)
        return newUser
    }
}