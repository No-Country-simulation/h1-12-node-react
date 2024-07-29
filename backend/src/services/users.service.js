import { Role } from "../database/models/index.js"
import { User } from "../database/models/index.js"
import { createHash } from "../utils/bcrypt.util.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"
import { HttpError } from "../utils/http-error.util.js"
import { InstitutionsService } from "./institutions.service.js"
import { InsurancesService } from "./insurances.service.js"
import { PatientsService } from "./patients.service.js"
import { ProfessionalsService } from "./professionals.service.js"

export class UsersService {

    constructor(){
        this.patientsService = new PatientsService()
        this.professionalsService = new ProfessionalsService()
        this.insurancesService = new InsurancesService()
        this.institutionsService = new InstitutionsService()
    } 

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

    update = async(uid, payload) => {
        const { image, first_name, last_name, dni, username, phone, province, locality, address, sex } = payload
        if(!uid){
            throw new HttpError('Missing user id', HTTP_CODES.BAD_REQUEST)
        }
        if(!Object.keys(payload).length){
            throw new HttpError('No fields to update', HTTP_CODES.BAD_REQUEST)
        }
        const user = await User.findByPk(uid, {
            include: [
              {
                model: Role,
                as: 'role'
              }
            ]
        });

        if(!user){
            throw new HttpError('User not found', HTTP_CODES.NOT_FOUND)
        }

        if(image){
            user.image = image
        }
        if(first_name){
            user.first_name = first_name
        }
        if(last_name){
            user.last_name = last_name
        }
        if(dni){
            user.dni = dni
        }
        if(username){
            user.username = username
        }
        if(phone){
            user.phone = phone
        }
        if(province){
            user.province = province
        }
        if(locality){
            user.locality = locality
        }
        if(address){
            user.address = address
        }

        const updatedUser = await user.save()

        const userRole = user.role.dataValues.role_name
        let updatedSpecificRole;
        switch (userRole) {
            case 'patient':
                updatedSpecificRole = await this.patientsService.updatePatient(updatedUser.id, payload)
                updatedUser.patient_data = updatedSpecificRole
                break;
            case 'professional':
                updatedSpecificRole = await this.professionalsService.updateProfessional(updatedUser.id, payload)
                updatedUser.professional_data = updatedSpecificRole
                break
            case 'insurance':
                updatedSpecificRole = await this.insurancesService.updateInsurance(updatedUser.id, payload)
                updatedUser.insurance_data = updatedSpecificRole
                break
            case 'institution':
                updatedSpecificRole = await this.institutionsService.updateInstitution(updatedUser.id, payload)
                updatedUser.institution_data = updatedSpecificRole
                break
            default:
                break;
        }

        return updatedUser
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