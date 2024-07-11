import { users } from "../mocks/data.mock.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"
import { HttpError } from "../utils/http-error.util.js"

const usersList = users

export class UsersService {
    getAll = async() => {
        return usersList
    }

    getById = async(uid) => {
        const user = usersList.find(user => user.id === uid)
        if(!user){
            throw new HttpError('User not found', HTTP_CODES.NOT_FOUND)
        }
        return user
    }

    getByUsername = async(username) => {
        const user = usersList.find(user => user.username === username)
        if(!user){
            throw new HttpError('User not found', HTTP_CODES.NOT_FOUND)
        }
        return user
    }

}