import { string, z } from "zod";

export const uidParam = z.object({
  params: z.object({
    uid: z
      .string()
      .regex(/^\d+$/, "UID must be a numeric string")
      .refine((val) => {
        const number = parseInt(val, 10);
        return number >= 1;
      }, "UID must be greater than or equal to 1"),
  }),
});

export const pidParam = z.object({
  params: z.object({
    pid: z
      .string()
      .regex(/^\d+$/, "PID must be a numeric string")
      .refine((val) => {
        const number = parseInt(val, 10);
        return number >= 1;
      }, "PID must be greater than or equal to 1"),
  }),
});


export const updateUserSchema = z.object({
  body: z.object({
    first_name: z
      .string()
      .regex(/^[\p{L} ]+$/u, "FIRST NAME must contain only letters and spaces")
      .optional(),
    last_name: z
      .string()
      .regex(/^[\p{L} ]+$/u, "LAST NAME must contain only letters and spaces")
      .optional(),
    dni: z
      .string()
      .regex(/^\d{7,8}$/, "DNI must be a numeric string of 7 or 8 digits")
      .optional(),
    username: z.string().optional(),
    phone: z.string().refine((phone) => {
      // Expresión regular para validar el formato E.164
      const phoneRegex = /^\+?[1-9]\d{3,14}$/;
      return phoneRegex.test(phone);
    }, {
      message: "El número de teléfono debe cumplir con los estándares internacionales (E.164).",
    }).optional(),
    jurisdiction_id: z
      .string()
      .regex(/^\d+$/, "Jurisdiction ID must be a numeric string"),
    locality:  z
      .string()
      .regex(/^[\p{L} .]{2,}$/u, "LOCALITY must contain only letters, spaces, accents, and periods, with at least 2 characters")
      .optional(),
    address:  z
      .string()
      .regex(/^[\p{L} .]{2,}$/u, "ADDRESS must contain only letters, spaces, accents, and periods, with at least 2 characters")
      .optional(),
    sex: z.string().optional(),
    blood_factor: z
      .enum(["a+", "a-", "ab+", "ab-", "b+", "b-", "0+", "0-"])
      .optional(),
    birthdate: z
      .string()
      .refine(
        (value) => {
          const date = new Date(value);
          return !isNaN(date.getTime());
        },
        {
          message: "Must be a valid date",
        }
      )
      .optional(),
    registration_number: z.union([
      z.string().refine((val) => /^\d{1,6}$/.test(val), {
        message: "REGISTRATION NUMBER must be a numeric string with 1 to 6 digits",
      }),
      z.number().refine((val) => val >= 0 && val <= 999999, {
        message: "REGISTRATION NUMBER must be a number with 1 to 6 digits",
      }),
    ]).optional(),
    speciality_id: z
    .string()
    .regex(/^\d+$/, "Speciality ID must be a numeric string")
    .refine((val) => {
      const number = parseInt(val, 10);
      return number >= 1;
    }, "Speciality ID must be greater than or equal to 1").optional(),
    province_id: z
    .string()
    .regex(/^\d+$/, "Province ID must be a numeric string")
    .refine((val) => {
      const number = parseInt(val, 10);
      return number >= 1;
    }, "Speciality ID must be greater than or equal to 1").optional(),
    insurance_name: z.string().optional(),
    institution_name: z.string().optional(),
  }),
});

export const passwordSchema = z.object({
  body: z.object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(15, "Password must be no more than 15 characters long")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[!#$%&'*+\-/=?^_{|}~]/,
        "Password must contain at least one special character from the set ! # $ % & ' * + - / = ? ^ _ { | } ~"
      ),
  }),
});
