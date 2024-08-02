import { ADMIN_PASS, ADMIN_USERNAME } from "../../config/env.config.js";
import { createHash } from "../../utils/bcrypt.util.js";

export default [
    // Administradores
    { 
        id: 1,
        role_id: 1, // admin
        email: 'admin@default.com',
        password: createHash(ADMIN_PASS),
        username: ADMIN_USERNAME,
        first_name: 'admin',
        last_name: 'admin',
        phone: null,
        dni: null,
        image: null,
        locality: null,
        jurisdiction_id: 1,
        address: null,
        updated_pass: true,
        createdAt: new Date(), 
        updatedAt: new Date() 
    },
    // Pacientes
    { 
        id: 2,
        role_id: 2, // patient
        email: 'patient1@default.com',
        password: createHash('randomlygeneratedpassword'),
        username: 'patient1',
        first_name: 'Florentino',
        last_name: 'Ariza',
        phone: null,
        dni: null,
        image: null,
        locality: null,
        jurisdiction_id: 5,
        address: null,
        updated_pass: false,
        createdAt: new Date(), 
        updatedAt: new Date() 
    },
    { 
        id: 3,
        role_id: 2, // patient
        email: 'patient2@default.com',
        password: createHash('Patient2!'),
        username: 'patient2',
        first_name: 'Aureliano',
        last_name: 'Buendía',
        phone: '+11123123',
        dni: '4000000',
        image: null,
        locality: 'Localidad Estándar',
        jurisdiction_id: 4,
        address: 'La callecita estándar 123',
        updated_pass: true,
        createdAt: new Date(), 
        updatedAt: new Date() 
    },
    { 
        id: 4,
        role_id: 2, // patient
        email: 'patient3@default.com',
        password: createHash('Patient3!'),
        username: 'patient3',
        first_name: 'Fermina',
        last_name: 'Daza',
        phone: '+111321321',
        dni: '4000001',
        image: null,
        locality: 'Localidad Estándar',
        jurisdiction_id: 2,
        address: 'La callecita estándar 123',
        updated_pass: true,
        createdAt: new Date(), 
        updatedAt: new Date() 
    },
    // Profesionales
    { 
        id: 5,
        role_id: 3, // professional
        email: 'professional1@default.com',
        password: createHash('Professional1!'),
        username: 'professional1',
        first_name: 'José Aureliano',
        last_name: 'Buendía',
        phone: '+222123123',
        dni: '12312312',
        image: null,
        locality: 'Localidad Estándar',
        jurisdiction_id: 5,
        address: 'La callecita estándar 123',
        updated_pass: true,
        createdAt: new Date(), 
        updatedAt: new Date() 
    },
    { 
        id: 6,
        role_id: 3, // professional
        email: 'professional2@default.com',
        password: createHash('Professional2!'),
        username: 'professional2',
        first_name: 'Tía',
        last_name: 'Escolástica',
        phone: '+222321312',
        dni: '23423423',
        image: null,
        locality: 'Localidad Estándar',
        jurisdiction_id: '8',
        address: 'La callecita estándar 123',
        updated_pass: true,
        createdAt: new Date(), 
        updatedAt: new Date() 
    },
    { 
        id: 7,
        role_id: 3, // professional
        email: 'professional3@default.com',
        password: createHash('Professional3!'),
        username: 'professional3',
        first_name: 'Juvenal',
        last_name: 'Urbino',
        phone: '+222765756',
        dni: '34534534',
        image: null,
        locality: 'Localidad Estándar',
        jurisdiction_id: 1,
        address: 'La callecita estándar 123',
        updated_pass: true,
        createdAt: new Date(), 
        updatedAt: new Date() 
    },
    // Prepagas
    { 
        id: 8,
        role_id: 4, // insurance
        email: 'insurance1@default.com',
        password: createHash('Insurance1!'),
        username: 'insurance1',
        first_name: 'Contacto',
        last_name: 'Prepaga',
        phone: '+22288888',
        dni: null,
        image: null,
        locality: 'Localidad Estándar',
        jurisdiction_id: 4,
        address: 'La callecita estándar 123',
        updated_pass: true,
        createdAt: new Date(), 
        updatedAt: new Date() 
    },
    { 
        id: 9,
        role_id: 4, // insurance
        email: 'insurance2@default.com',
        password: createHash('Insurance2!'),
        username: 'insurance2',
        first_name: 'Contacto',
        last_name: 'Prepaga',
        phone: '+22299999',
        dni: null,
        image: null,
        locality: 'Localidad Estándar',
        jurisdiction_id: 5,
        address: 'La callecita estándar 123',
        updated_pass: true,
        createdAt: new Date(), 
        updatedAt: new Date() 
    },
    // Instituciones
    { 
        id: 10,
        role_id: 5, // institution
        email: 'institution1@default.com',
        password: createHash('Institution1!'),
        username: 'institution1',
        first_name: 'Contacto',
        last_name: 'Institución',
        phone: null,
        dni: null,
        image: null,
        locality: null,
        jurisdiction_id: 1,
        address: null,
        updated_pass: true,
        createdAt: new Date(), 
        updatedAt: new Date() 
    },
    { 
        id: 11,
        role_id: 5, // institution
        email: 'institution2@default.com',
        password: createHash('Institution2!'),
        username: 'institution2',
        first_name: 'Contacto',
        last_name: 'Institución',
        phone: null,
        dni: null,
        image: null,
        locality: null,
        jurisdiction_id: 1,
        address: null,
        updated_pass: true,
        createdAt: new Date(), 
        updatedAt: new Date() 
    },
]