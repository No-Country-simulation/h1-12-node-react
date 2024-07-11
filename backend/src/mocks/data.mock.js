export const users = [
    {
        id: 1,
        email: 'juan@email.com',
        password: '$2a$10$GXLNY.4S8mb5TAmH9GOeveHWIcG/gFe3KdvRcY6SCj3.NEJFPKSjS', // contraseña: juan
        role_id: 1,
        username: 'juan'
    },
    {
        id: 1,
        email: 'lucas@email.com',
        password: '$2a$10$YmnVhCyo8ltkxVl0nCWZ1uQr1lUS1wzoeX89nj/GgxqCmNx4C8GnK', // contraseña: lucas
        role_id: 2,
        username: 'lucas'
    }
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
