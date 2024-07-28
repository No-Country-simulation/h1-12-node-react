import { z } from "zod";

export const tidParam = z.object({
  params: z.object({
    tid: z
      .string()
      .regex(/^\d+$/, "TID must be a numeric string")
      .refine((val) => {
        const number = parseInt(val, 10);
        return number >= 1;
      }, "TID must be greater than or equal to 1"),
  }),
});

export const createTreatmentSchema = z.object({
  body: z.object({
    pathology_id: z.number().int().min(1).optional(),
    patient_id: z.number().int().min(1),
    cycle: z.enum(["created", "current", "finished"]).default("created"),
    status: z.enum(["pre-trasplant", "post-trasplant"]).optional(),
    start_date: z.date().optional(),
    finish_date: z.date().optional(),
  }),
});

export const updateTreatmentSchema = z.object({
  body: z.object({
    pathology_id: z.number().int().min(1).optional(),
    patient_id: z.number().int().min(1).optional(),
    cycle: z.enum(["created", "current", "finished"]).optional(),
    status: z.enum(["pre-trasplant", "post-trasplant"]).optional(),
    finish_date: z.date().optional(),
  }),
});

export const addMedicationSchema = z.object({
  body: z.object({
    start_date:  z
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
    finish_date:  z
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
    description: z.string().optional(),
    dosage:  z.string().optional(),
    "pre-trasplant":  z.boolean(),
    period: z.number().min(1)
  })
})
