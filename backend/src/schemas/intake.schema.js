import { z } from "zod";

export const iidParam = z.object({
  params: z.object({
    iid: z
      .string()
      .regex(/^\d+$/, "IID must be a numeric string")
      .refine((val) => {
        const number = parseInt(val, 10);
        return number >= 1;
      }, "IID must be greater than or equal to 1"),
  }),
});

export const createIntakeSchema = z.object({
  body: z.object({
    medication_treatment_id: z.number().int().min(1),
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
  }),
});

export const updateIntakeSchema = z.object({
  body: z.object({
    taken: z.boolean().optional(),
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
      )
      .optional(),
  }),
});
