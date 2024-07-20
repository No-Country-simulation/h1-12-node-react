import { z } from "zod";

export const midParam = z.object({
  params: z.object({
    mid: z.string().regex(/^\d+$/, "MID must be a numeric string"),
  })
});

export const mqueryParam = z.object({
    params: z.object({
        mquery: z.string().min(3, "Mquery must be at least 3 characters long"),
    })
  });
