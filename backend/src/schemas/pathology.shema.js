import { z } from "zod";

export const pidParam = z.object({
  params: z.object({
    pid: z.string().regex(/^\d+$/, "PID must be a numeric string"),
  })
});

export const pqueryParam = z.object({
    params: z.object({
        pquery: z.string().min(3, "Pquery must be at least 3 characters long"),
    })
  });
