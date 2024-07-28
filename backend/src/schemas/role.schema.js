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

export const createRoleSchema = z.object({
  body: z.object({
    role_name: z.string().min(2, 'ROLE NAME must have a minimum of 2 characters'),
    permission_ids: z.array(z.number(),' PERMISSION_IDS must be an array of numbers')
  }),
});

export const updateRoleSchema = z.object({
  body: z.object({
    role_name: z.string().min(2, 'ROLE NAME must have a minimum of 2 characters').optional(),
    permission_ids: z.array(z.number(),' PERMISSION_IDS must be an array of numbers').optional()
  }),
});
