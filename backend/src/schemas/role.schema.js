import { z } from "zod";

export const ridParam = z.object({
  params: z.object({
    pid: z.string().regex(/^\d+$/, "RID must be a numeric string"),
  })
});

export const createRoleSchema = z.object({
    body: z.object({
        role_name: z.string()
    })
});
