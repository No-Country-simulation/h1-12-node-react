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
        return user
    }

    getByUsername = async(username) => {
        const user = User.findOne({ where: { username: username } })
        if(!user){
            throw new HttpError('User not found', HTTP_CODES.NOT_FOUND)
        }
        return user
    }

    getByEmail = async(email) => {
        const user = User.findOne({ where: { email: email } })
        return user
    }
}