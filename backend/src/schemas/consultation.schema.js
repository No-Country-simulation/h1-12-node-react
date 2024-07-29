import { z } from "zod";

export const cidParam = z.object({
  params: z.object({
    cid: z
      .string()
      .regex(/^\d+$/, "CID must be a numeric string")
      .refine((val) => {
        const number = parseInt(val, 10);
        return number >= 1;
      }, "CID must be greater than or equal to 1"),
  }),
});

export const createConsultationSchema = z.object({
  body: z.object({
    patient_id: z.number().int().min(1),
    professional_id: z.number().int().min(1),
    date: z
      .string()
      .refine(
        (value) => {
          const date = new Date(value);
          return !isNaN(date.getTime());
        },
        {
          message: "Must be a valid date",
        }
      ),
    description: z.string().optional()
  }),
});

export const updateConsultationSchema = z.object({
  body: z.object({
    date: z
      .string()
      .refine(
        (value) => {
          const date = new Date(value);
          return !isNaN(date.getTime());
        },
        {
          message: "Must be a valid date",
        }
      ).optional(),
    description: z.string().optional(),
    status: z.enum(['created', 'accepted', 'denied', 'finished']).optional()
  }),
});
