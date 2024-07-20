import { z } from "zod";

export const uidParam = z.object({
  params: z.object({
    uid: z.string().regex(/^\d+$/, "UID must be a numeric string"),
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

