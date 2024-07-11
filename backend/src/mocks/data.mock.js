export const users = [
    {
        id: 1,
        role_id: 1,
        email: 'juan@email.com',
        password: '$2a$10$GXLNY.4S8mb5TAmH9GOeveHWIcG/gFe3KdvRcY6SCj3.NEJFPKSjS', // contraseña: juan
        username: 'juan',
        first_name: 'Juan',
        last_name: 'Nebbia',
        phone: '1234567890',
        dni: 12345,
        image: null,
        locality: 'Córdoba',
        province: 'Córdoba',
        address: 'pepito 123',
        updated_pass: true
    },
    {
        id: 2,
        role_id: 1,
        email: 'lucas@email.com',
        password: '$2a$10$YmnVhCyo8ltkxVl0nCWZ1uQr1lUS1wzoeX89nj/GgxqCmNx4C8GnK', // contraseña: lucas
        username: 'lucas',
        first_name: 'Lucas',
        last_name: 'Scifo',
        phone: '1234567890',
        dni: 12345,
        image: null,
        locality: 'Corrientes',
        province: 'Corrientes',
        address: 'pepepee 1234',
        updated_pass: true
    },
    {
        id: 3,
        role_id: 2,
        email: 'carlos@email.com',
        password: '$2a$10$YmnVhCyo8ltkxVl0nCWZ1uQr1lUS1wzoeX89nj/GgxqCmNx4C8GnK', // contraseña: lucas
        username: 'carlos',
        first_name: 'Carlos',
        last_name: 'Perez',
        phone: '1234567890',
        dni: 12345,
        image: null,
        locality: 'La Plata',
        province: 'Buenos Aires',
        address: 'pepepee 1234',
        updated_pass: true
    },
    {
        id: 4,
        role_id: 2,
        email: 'laura@email.com',
        password: '$2a$10$YmnVhCyo8ltkxVl0nCWZ1uQr1lUS1wzoeX89nj/GgxqCmNx4C8GnK', // contraseña: lucas
        username: 'laura',
        first_name: 'Laura',
        last_name: 'Gomez',
        phone: '1234567890',
        dni: 12345,
        image: null,
        locality: 'La Plata',
        province: 'Buenos Aires',
        address: 'pepepee 1234',
        updated_pass: true
    }
]

export const patients = [
    {
        id: 1,
        user_id: 1,
        active_treatment: null,
        health_insurance_id: null,
        head_professional_id: null,
        sex: 'm',
        blood_factor: 'a+',
        birthdate: Date.now()
    },
    {
        id: 2,
        user_id: 2,
        active_treatment: null,
        health_insurance_id: null,
        head_professional_id: null,
        sex: 'm',
        blood_factor: 'a-',
        birthdate: Date.now()
    },
]

export const professionals = [
    {
        id: 1,
        user_id: 3,
        speciality_id: 1,
        resgistration_number: 12345
    },
    {
        id: 2,
        user_id: 4,
        speciality_id: 1,
        resgistration_number: 12345
    },
]

export const roles = [
    {
        id: 1,
        role_name: 'patient',
    },
    {
        id: 2,
        role_name: 'professional',
    },
    {
        id: 3,
        role_name: 'health_insurance',
    },
    {
        id: 4,
        role_name: 'institution',
    },
    {
        id: 5,
        role_name: 'admin',
    }
]

export const permissions = [
    {
        id: 1,
        permission: 'see patient'
    },
    {
        id: 2,
        permission: 'create patient'
    },
    {
        id: 3,
        permission: 'update patient'
    },
    {
        id: 4,
        permission: 'delete patient'
    },
    {
        id: 5,
        permission: 'see professional'
    },
    {
        id: 6,
        permission: 'create professional'
    },
    {
        id: 7,
        permission: 'update professional'
    },
    {
        id: 8,
        permission: 'delete professional'
    },
]
