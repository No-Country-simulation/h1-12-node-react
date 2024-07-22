import { z } from "zod";

export const pidParam = z.object({
  params: z.object({
    pid: z.string().regex(/^\d+$/, "PID must be a numeric string"),
  })
});

export const createPermissionSchema = z.object({
    body: z.object({
        permission: z.string(),
        role_ids: z.array(z.number())
    })
});


export const updatedPermissionSchema = z.object({
  body: z.object({
      permission: z.string().optional(),
      role_ids: z.array(z.number()).optional()
  })
});