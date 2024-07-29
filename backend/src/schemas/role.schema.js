import { z } from "zod";

export const ridParam = z.object({
  params: z.object({
    rid: z
      .string()
      .regex(/^\d+$/, "RID must be a numeric string")
      .refine((val) => {
        const number = parseInt(val, 10);
        return number >= 1;
      }, "RID must be greater than or equal to 1"),
  }),
});

export const roleSchema = z.object({
  body: z.object({
    role_name: z.string(),
  }),
});
