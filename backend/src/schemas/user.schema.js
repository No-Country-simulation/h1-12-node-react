import { string, z } from "zod";

export const uidParam = z.object({
  params: z.object({
    uid: z.string().regex(/^\d+$/, "UID must be a numeric string"),
  })
});

export const updateUserSchema = z.object({
  body: z.object({
    image: z.string().optional(),
    first_name: z.string().optional(),
    last_name: z.string().optional(),
    dni: z.string().min(7, 'DNI must contain at least 7 characters').max(9, 'DNI must contain less than 10 characters').optional(),
    username: z.string().optional(),
    phone: z.string().optional(),
    province: z.string().optional(),
    locality: z.string().optional(),
    address: z.string().optional(),
    sex: z.string().optional(),
    blood_factor: z.enum(['a+', 'a-', 'ab+', 'ab-', 'b+', 'b-', '0+', '0-']).optional(),
    birthdate: z.string().refine(value =>{
      const date = new Date(value)
      return !isNaN(date.getTime())
    },{
      message: 'Must be a valid date'
    }).optional(),
    registration_number: z.number().optional(),
    speciality_id: z.number().optional(),
    insurance_name: z.string().optional(),
    institution_name: z.string().optional(),
  })
});


export const passwordSchema = z.object({
  body: z.object({
      password: z.string()
      .min(8, "Password must be at least 8 characters long")
      .max(15, "Password must be no more than 15 characters long")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(/[!#$%&'*+\-/=?^_{|}~]/, "Password must contain at least one special character from the set ! # $ % & ' * + - / = ? ^ _ { | } ~")
  })
});

