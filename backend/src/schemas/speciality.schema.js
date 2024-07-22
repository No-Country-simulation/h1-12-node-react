import { z } from "zod";

export const sidParam = z.object({
  params: z.object({
    sid: z.string().regex(/^\d+$/, "SID must be a numeric string").refine((val) => {
      const number = parseInt(val, 10);
      return number >= 1;
    }, "SID must be greater than or equal to 1")
  })
});

export const createSpecialitySchema = z.object({
    body: z.object({
        speciality_name: z.string()
    })
});


export const updateSpecialitySchema = z.object({
  body: z.object({
      speciality_name: z.string().optional()
  })
});