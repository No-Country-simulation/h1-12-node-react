export default [
    { 
        id: 1,
        user_id: 2,
        head_professional_id: null,
        health_insurance_id: null,
        sex: null,
        blood_factor: null,
        birthdate: null,
        createdAt: new Date(), 
        updatedAt: new Date() 
    },
    { 
        id: 2,
        user_id: 3,
        head_professional_id: 1,
        health_insurance_id: null,
        sex: null,
        blood_factor: 'ab+',
        birthdate: new Date('2000-01-01'),
        createdAt: new Date(), 
        updatedAt: new Date() 
    },
    { 
        id: 3,
        user_id: 4,
        head_professional_id: 2,
        health_insurance_id: 2,
        sex: null,
        blood_factor: '0-',
        birthdate: new Date('2010-01-01'),
        createdAt: new Date(), 
        updatedAt: new Date() 
    }    
]