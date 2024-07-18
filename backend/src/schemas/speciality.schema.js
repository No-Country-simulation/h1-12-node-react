import { z } from "zod";

export const sidParam = z.object({
  params: z.object({
    sid: z.string().regex(/^\d+$/, "SID must be a numeric string"),
  })
});

export const createSpecialitySchema = z.object({
    body: z.object({
        speciality_name: z.string()
    })
});
