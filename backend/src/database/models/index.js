import { Sequelize } from "sequelize";
import { initUser, User } from "./user.js";
import { initRole, Role } from "./role.js";
import { initHealthInsurance, HealthInsurance } from "./healthinsurance.js";
import { initInstitution, Institution } from "./institution.js";
import {
  initInstitutionProfessionals,
  InstitutionProfessionals,
} from "./institutionprofessionals.js";
import { initPatient, Patient } from "./patient.js";
import { initPermission, Permission } from "./permission.js";
import { initProfessional, Professional } from "./professional.js";
import { initRolesPermissions, RolesPermissions } from "./rolespermissions.js";
import { initSpeciality, Speciality } from "./speciality.js";
import { initPathology, Pathology } from "./pathology.js";
import { initMedication, Medication } from "./medication.js";
import config from "../config/config.js";
import { initTreatment, Treatment } from "./treatment.js";
import { initDocument, Document } from "./document.js";
import { initMedicationTreatments, MedicationTreatments } from "./medicationtreatments.js";
import { initInsuranceProfessionals, InsuranceProfessionals } from "./healthinsuranceprofessionals.js";
import { initTreatmentProfessionals, TreatmentProfessionals } from "./treatmentprofessionals.js";
import { initIntake, Intake } from "./intake.js";
import { initService, Service } from "./service.js";
import { initSubCategory, SubCategory } from "./subcategory.js";
import { initCategory, Category } from "./category.js";
import { initJurisdiction, Jurisdiction } from "./jurisdiction.js";
const env = process.env.NODE_ENV || "development";
const configEnv = config[env];

const sequelize = new Sequelize(configEnv.database, configEnv.username, configEnv.password, {
  host: configEnv.host,
  dialect: configEnv.dialect,
  timezone: configEnv.timezone,
  dialectOptions: configEnv.dialectOptions,
  migrationStorage: configEnv.migrationStorage,
  migrationStorageTableName: configEnv.migrationStorageTableName,
  seedStorage: configEnv.seedStorage,
  seedStorageTableName: configEnv.seedStorageTableName,
});

// Inicializar los modelos
initUser(sequelize);
initRole(sequelize);
initHealthInsurance(sequelize);
initInstitution(sequelize);
initInstitutionProfessionals(sequelize);
initPatient(sequelize);
initPermission(sequelize);
initProfessional(sequelize);
initRolesPermissions(sequelize);
initSpeciality(sequelize);
initPathology(sequelize);
initMedication(sequelize);
initTreatment(sequelize);
initDocument(sequelize);
initMedicationTreatments(sequelize);
initInsuranceProfessionals(sequelize);
initTreatmentProfessionals(sequelize);
initIntake(sequelize);
initService(sequelize);
initSubCategory(sequelize);
initCategory(sequelize);
initJurisdiction(sequelize);

// Configurar las asociaciones
HealthInsurance.associate({ User, Professional });
Institution.associate({ User, Professional });
Patient.associate({ User, HealthInsurance, Professional });
Permission.associate({ Role });
Professional.associate({ User, Speciality, Patient, HealthInsurance, Treatment, Institution, Jurisdiction });
Role.associate({ User, Permission });
RolesPermissions.associate({});
Speciality.associate({ Professional });
User.associate({ Role });
Treatment.associate({ Patient, Pathology, Professional, Medication })
Document.associate({ Treatment })
Medication.associate({ Treatment })
Intake.associate({ MedicationTreatments })
Service.associate({ SubCategory, Category })
SubCategory.associate({ Category })

export {
  sequelize,
  User,
  Role,
  Permission,
  HealthInsurance,
  Institution,
  InstitutionProfessionals,
  InsuranceProfessionals,
  Patient,
  Professional,
  RolesPermissions,
  Speciality,
  Pathology,
  Medication,
  Treatment,
  Document,
  MedicationTreatments,
  TreatmentProfessionals,
  Intake,
  Service,
  SubCategory,
  Category,
  Jurisdiction
};
