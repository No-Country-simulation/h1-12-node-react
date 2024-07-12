import { User } from "../database/models/user.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"
import { HttpError } from "../utils/http-error.util.js"

export class UsersService {
    getAll = async() => {
        const users = await User.findAll()
        return users
    }

    getById = async(uid) => {
        const user = await User.findByPk(+uid)
        if(!user){
            throw new HttpError('User not found', HTTP_CODES.NOT_FOUND)
        }
        return user.dataValues
    }

    getByUsername = async(username) => {
        const user = await User.findOne({ where: { username: username } })
        if(!user){
            throw new HttpError('User not found', HTTP_CODES.NOT_FOUND)
        }
        return user.dataValues
    }

    getByEmail = async(email) => {
        const user = await User.findOne({ where: { email: email } })
        return user.dataValues
    }

    createUser = async(payload) => {
        const  { email, username, password, first_name, last_name, dni, role_id } = payload
        const newUser = {
            email,
            password,
            username,
            first_name,
            last_name,
            dni,
            role_id,
            updated_pass: false,
            phone: null,
            image: null,
            locality: null,
            province: null,
            address: null,
        }
        // Agregar transacciones para corrobrar creación correcta del paciente, etc. antes de crear el usuario
        const user = await User.create(newUser)
        return user
    }
}