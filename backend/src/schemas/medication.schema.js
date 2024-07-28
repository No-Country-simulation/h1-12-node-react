import { z } from "zod";

export const midParam = z.object({
  params: z.object({
    mid: z
      .string()
      .regex(/^\d+$/, "MID must be a numeric string")
      .refine((val) => {
        const number = parseInt(val, 10);
        return number >= 1;
      }, "MID must be greater than or equal to 1"),
  }),
});

export const mqueryParam = z.object({
  params: z.object({
    mquery: z
      .string()
      .min(3, "Mquery must be at least 3 characters long")
      .regex(/^[a-zA-Z\s+]+$/, {
        message: "Only letters and the plus symbol (+) are allowed",
      })
      .refine((val) => val.trim().length > 0, {
        message: "The field cannot contain only spaces",
      })
      .refine((val) => !/^[+ ]+$/.test(val), {
        message: "The field cannot contain only the plus symbol (+) or spaces",
      }),
  }),
});

export const mdrugParam = z.object({
  params: z.object({
    mdrug: z
      .string()
      .min(3, "Mdrug must be at least 3 characters long")
      .regex(/^[a-zA-Z\s+]+$/, {
        message: "Only letters and the plus symbol (+) are allowed",
      })
      .refine((val) => val.trim().length > 0, {
        message: "The field cannot contain only spaces",
      })
      .refine((val) => !/^[+ ]+$/.test(val), {
        message: "The field cannot contain only the plus symbol (+) or spaces",
      }),
  }),
});
