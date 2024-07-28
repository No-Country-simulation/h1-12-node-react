import { z } from "zod";

export const sidParam = z.object({
  params: z.object({
    sid: z
      .string()
      .regex(/^\d+$/, "SID must be a numeric string")
      .refine((val) => {
        const number = parseInt(val, 10);
        return number >= 1;
      }, "SID must be greater than or equal to 1"),
  }),
});

export const squeryParam = z.object({
  params: z.object({
    squery: z
      .string()
      .min(3, "Squery must be at least 3 characters long")
      .regex(/^[a-zA-Z\s]+$/, { message: "Only letters are allowed" })
      .refine((val) => val.trim().length > 0, {
        message: "The field cannot contain only spaces",
      })
  }),
});
