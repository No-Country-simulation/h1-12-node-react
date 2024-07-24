import { z } from "zod";

export const loginSchema = z.object({
  body: z.object({
    username: z.string().min(4).max(15),
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

export const registerPatientSchema = z.object({
  body: z.object({
    email: z.string().email(),
    first_name: z.string(),
    last_name: z.string(),
    role: z.literal("patient"),
    dni: z.string().regex(/^(?:\d{7,8}|[XYZ]\d{6,7})$/, "DNI must be a valid Argentinean DNI")
  }),
});

export const registerProfessionalSchema = z.object({
  body: z.object({
    email: z.string().email(),
    first_name: z.string(),
    last_name: z.string(),
    role: z.literal("professional"),
    dni: z.string().regex(/^(?:\d{7,8}|[XYZ]\d{6,7})$/, "DNI must be a valid Argentinean DNI")
  }),
});

export const registerInsuranceSchema = z.object({
  body: z.object({
    email: z.string().email(),
    first_name: z.string(),
    last_name: z.string(),
    role: z.literal("insurance"),
    insurance_name: z.string(),
  }),
});

export const registerInstitutionSchema = z.object({
  body: z.object({
    email: z.string().email(),
    first_name: z.string(),
    last_name: z.string(),
    role: z.literal("institution"),
    institution_name: z.string(),
    institution_type: z.string(),
  }),
});

export const recoverPasswordSchema = z.object({
  body: z.object({
    email: z.string().email(),
  }),
});
