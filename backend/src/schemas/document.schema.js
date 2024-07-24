import { z } from "zod";

export const didParam = z.object({
  params: z.object({
    did: z
      .string()
      .regex(/^\d+$/, "TID must be a numeric string")
      .refine((val) => {
        const number = parseInt(val, 10);
        return number >= 1;
      }, "DID must be greater than or equal to 1"),
  }),
});

export const createDocumentSchema = z.object({
  body: z.object({
    treatment_id: z
      .string()
      .regex(/^\d+$/, "TID must be a numeric string")
      .refine((val) => {
        const number = parseInt(val, 10);
        return number >= 1;
      }, "Treatment ID must be greater than or equal to 1"),
    date: z.date().optional(),
    description: z.string().optional(),
    type: z.enum(["prescription", "other"]).optional(),
  }),
});

export const updateDocumentSchema = z.object({
  body: z.object({
    date: z.date().optional(),
    description: z.string().optional(),
    type: z.enum(["prescription", "other"]).optional(),
  }),
});
