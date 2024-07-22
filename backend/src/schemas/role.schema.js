import { z } from "zod";

export const ridParam = z.object({
  params: z.object({
    rid: z.string().regex(/^\d+$/, "RID must be a numeric string"),
  })
});

export const roleSchema = z.object({
    body: z.object({
        role_name: z.string()
    })
});
