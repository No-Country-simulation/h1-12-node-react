import { User } from "../database/models/user.js"
import { createHash } from "../utils/bcrypt.util.js"
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
        const user = await User.findOne({ where: { username: username.toUpperCase() } })
        if(!user){
            throw new HttpError('User not found', HTTP_CODES.NOT_FOUND)
        }
        return user.dataValues
    }

    getByEmail = async(email) => {
        if(!email){
            throw new HttpError('missing email address', HTTP_CODES.BAD_REQUEST)
        }
        const user = await User.findOne({ where: { email: email } })
        return user?.dataValues
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
        const user = await User.create(newUser)
        return user
    }

    updatePassword = async(uid, password) => {
        if(!password){
            throw new HttpError('New password required', HTTP_CODES.BAD_REQUEST)
        }
        const user = await User.findByPk(uid)
        if(!user){
            throw new HttpError('User not found', HTTP_CODES.NOT_FOUND)
        }
        const hashedPass = createHash(password)
        user.password = hashedPass;
        user.updated_pass = true;
        await user.save()
        return user
    }

    delete = async(uid) => {
        const user = await User.findByPk(+uid)
        if(!user){
            throw new HttpError('User not found', HTTP_CODES.NOT_FOUND)
        }
        const deletedUser = await user.destroy()
        return deletedUser
    }
}