import { z } from "zod";

export const sidParam = z.object({
  params: z.object({
    sid: z
      .string()
      .regex(/^\d+$/, "SID must be a numeric string")
      .refine((val) => {
        const number = parseInt(val, 10);
        return number >= 1;
      }, "SID must be greater than or equal to 1"),
  }),
});
