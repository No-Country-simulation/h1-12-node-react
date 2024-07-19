import { Sequelize } from "sequelize";
import { initUser, User } from "./user.js";
import { initRole, Role } from "./role.js";
import { initHealthInsurance, HealthInsurance } from "./healthinsurance.js";
import { initInstitution, Institution } from "./institution.js";
import {
  initInstitutionsProfessional,
  InstitutionProfessionals,
} from "./institutionprofessionals.js";
import { initPatient, Patient } from "./patient.js";
import { initPermission, Permission } from "./permission.js";
import { initProfessional, Professional } from "./professional.js";
import { initRolesPermissions, RolesPermissions } from "./rolespermissions.js";
import { initSpeciality, Speciality } from "./speciality.js";
import { initPathology } from "./pathology.js";

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

// Inicializar los modelos
initUser(sequelize);
initRole(sequelize);
initHealthInsurance(sequelize);
initInstitution(sequelize);
initInstitutionsProfessional(sequelize);
initPatient(sequelize);
initPermission(sequelize);
initProfessional(sequelize);
initRolesPermissions(sequelize);
initSpeciality(sequelize);
initPathology(sequelize);

// Configurar las asociaciones
HealthInsurance.associate({ User });
Institution.associate({ User, Professional });
InstitutionProfessionals.associate({});
Patient.associate({ User, HealthInsurance, Professional });
Permission.associate({ Role });
Professional.associate({ User, Speciality, Patient });
Role.associate({ User, Permission });
RolesPermissions.associate({});
Speciality.associate({ Professional });
User.associate({ Role });

export {
  sequelize,
  User,
  Role,
  Permission,
  HealthInsurance,
  Institution,
  InstitutionProfessionals,
  Patient,
  Professional,
  RolesPermissions,
  Speciality,
};
