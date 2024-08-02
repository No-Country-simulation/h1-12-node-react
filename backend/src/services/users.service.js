import {
  HealthInsurance,
  Intake,
  Medication,
  Institution,
  MedicationTreatments,
  Pathology,
  Patient,
  Professional,
  Role,
  Treatment,
  TreatmentProfessionals,
  Speciality,
  Jurisdiction,
} from "../database/models/index.js";
import { User } from "../database/models/index.js";
import { createHash } from "../utils/bcrypt.util.js";
import { HTTP_CODES } from "../utils/http-codes.util.js";
import { HttpError } from "../utils/http-error.util.js";
import { InstitutionsService } from "./institutions.service.js";
import { InsurancesService } from "./insurances.service.js";
import { PatientsService } from "./patients.service.js";
import { ProfessionalsService } from "./professionals.service.js";

export class UsersService {
  constructor() {
    this.patientsService = new PatientsService();
    this.professionalsService = new ProfessionalsService();
    this.insurancesService = new InsurancesService();
    this.institutionsService = new InstitutionsService();
  }

  getAll = async () => {
    const users = await User.findAll({
      include: [
        {
          model: Jurisdiction,
          as: "jurisdiction",
          attributes: ["name"],
        },
        {
          model: Role,
          as: "role",
          attributes: ["role_name"],
        },
        {
          model: Patient,
          as: "patient_data",
          attributes: ["id"],
        },
        {
          model: Professional,
          as: "professional_data",
          attributes: ["id"],
          include: [
            {
              model: Speciality,
              as: "speciality",
              attributes: ["speciality_name"],
            },
          ],
        },
        { model: HealthInsurance, as: "insurance_data", attributes: ["id"] },
        { model: Institution, as: "institution_data", attributes: ["id"] },
      ],
    });
    return users;
  };

  getById = async (uid) => {
    const user = await User.findByPk(+uid, {
      include: [
        {
          model: Jurisdiction,
          as: "jurisdiction",
          attributes: ["name"],
        },
        {
          model: Role,
          as: "role",
          attributes: ["role_name"],
        },
        {
          model: Patient,
          as: "patient_data",
          attributes: ["id"],
        },
        {
          model: Professional,
          as: "professional_data",
          attributes: ["id"],
          include: [
            {
              model: Speciality,
              as: "speciality",
              attributes: ["speciality_name"],
            },
          ],
        },
        { model: HealthInsurance, as: "insurance_data", attributes: ["id"] },
        { model: Institution, as: "institution_data", attributes: ["id"] },
      ],
    });
    if (!user) {
      throw new HttpError("User not found", HTTP_CODES.NOT_FOUND);
    }
    return user.dataValues;
  };

  getByUsername = async (username) => {
    const user = await User.findOne({
      where: { username: username.toUpperCase() },
      include: [
        {
          model: Jurisdiction,
          as: "jurisdiction",
          attributes: ["name"],
        },
        { model: Role, as: "role", attributes: ["role_name"] },
        { model: Patient, as: "patient_data", attributes: ["id"] },
        {
          model: Professional,
          as: "professional_data",
          attributes: ["id"],
          include: [
            {
              model: Speciality,
              as: "speciality",
              attributes: ["speciality_name"],
            },
          ],
        },
        { model: HealthInsurance, as: "insurance_data", attributes: ["id"] },
        { model: Institution, as: "institution_data", attributes: ["id"] },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    if (!user) {
      throw new HttpError("User not found", HTTP_CODES.NOT_FOUND);
    }
    return user.dataValues;
  };

  getByEmail = async (email) => {
    if (!email) {
      throw new HttpError("missing email address", HTTP_CODES.BAD_REQUEST);
    }
    const user = await User.findOne({ where: { email: email } });
    return user?.dataValues;
  };

  createUser = async (payload) => {
    const { email, username, password, first_name, last_name, dni, role_id, province_id = 1 } =
      payload;
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
      jurisdiction_id: province_id,
      address: null,
    };
    const user = await User.create(newUser);
    return user;
  };

  update = async (uid, payload) => {
    const {
      image,
      first_name,
      last_name,
      dni,
      username,
      phone,
      province_id,
      locality,
      address,
      sex,
    } = payload;
    if (!uid) {
      throw new HttpError("Missing user id", HTTP_CODES.BAD_REQUEST);
    }
    if (!Object.keys(payload).length) {
      throw new HttpError("No fields to update", HTTP_CODES.BAD_REQUEST);
    }
    const user = await User.findByPk(uid, {
      include: [
        {
          model: Role,
          as: "role",
        },
      ],
    });

    if (!user) {
      throw new HttpError("User not found", HTTP_CODES.NOT_FOUND);
    }

    if (image) {
      user.image = image;
    }
    if (first_name) {
      user.first_name = first_name;
    }
    if (last_name) {
      user.last_name = last_name;
    }
    if (dni) {
      user.dni = dni;
    }
    if (username) {
      user.username = username;
    }
    if (phone) {
      user.phone = phone;
    }
    if (province_id) {
      user.jurisdiction_id = province_id;
    }
    if (locality) {
      user.locality = locality;
    }
    if (address) {
      user.address = address;
    }

    const updatedUser = await user.save();

    const userRole = user.role.dataValues.role_name;
    let updatedSpecificRole;
    switch (userRole) {
      case "patient":
        updatedSpecificRole = await this.patientsService.updatePatient(
          updatedUser.id,
          payload
        );
        updatedUser.patient_data = updatedSpecificRole;
        break;
      case "professional":
        updatedSpecificRole =
          await this.professionalsService.updateProfessional(
            updatedUser.id,
            payload
          );
        updatedUser.professional_data = updatedSpecificRole;
        break;
      case "insurance":
        updatedSpecificRole = await this.insurancesService.updateInsurance(
          updatedUser.id,
          payload
        );
        updatedUser.insurance_data = updatedSpecificRole;
        break;
      case "institution":
        updatedSpecificRole = await this.institutionsService.updateInstitution(
          updatedUser.id,
          payload
        );
        updatedUser.institution_data = updatedSpecificRole;
        break;
      default:
        break;
    }

    return updatedUser;
  };

  updatePassword = async (uid, password) => {
    if (!password) {
      throw new HttpError("New password required", HTTP_CODES.BAD_REQUEST);
    }
    const user = await User.findByPk(uid);
    if (!user) {
      throw new HttpError("User not found", HTTP_CODES.NOT_FOUND);
    }
    const hashedPass = createHash(password);
    user.password = hashedPass;
    user.updated_pass = true;
    await user.save();
    return user;
  };

  delete = async (uid) => {
    const user = await User.findByPk(+uid);
    if (!user) {
      throw new HttpError("User not found", HTTP_CODES.NOT_FOUND);
    }
    const deletedUser = await user.destroy();
    return deletedUser;
  };

  getHistory = async (pid) => {
    const user = await Patient.findByPk(+pid, {
      include: [
        {
          model: User,
          as: "user",
          attributes: {
            exclude: ["password", "createdAt", "updatedAt", "updated_pass"],
          },
          include: [
            {
              model: Jurisdiction,
              as: "jurisdiction",
              attributes: ["name"],
            }
          ]
        },
        {
          model: Treatment,
          as: "treatments",
          include: [
            {
              model: Pathology,
              as: "pathology",
              attributes: {
                exclude: ["createdAt", "updatedAt"],
              },
            },
            {
              model: Professional,
              as: "professionals",
              through: { attributes: [] },
            },
            {
              model: TreatmentProfessionals,
              as: "treatment_professionals",
              attributes: {
                exclude: ["createdAt", "updatedAt"],
              },
            },
            {
              model: Medication,
              as: "medications",
              through: { attributes: [] },
            },
            {
              model: MedicationTreatments,
              as: "medication_treatments",
              attributes: {
                exclude: ["createdAt", "updatedAt"],
              },
              include: [
                {
                  model: Intake,
                  as: "intakes",
                  attributes: {
                    exclude: ["createdAt", "updatedAt"],
                  },
                },
              ],
            },
          ],
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        {
          model: HealthInsurance,
          as: "health_insurance",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        {
          model: Professional,
          as: "professionals",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
    });
    if (!user) {
      throw new HttpError("Patient not found", HTTP_CODES.NOT_FOUND);
    }

    return user;
  };
}
