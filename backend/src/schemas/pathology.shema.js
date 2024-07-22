import { z } from "zod";

export const pidParam = z.object({
  params: z.object({
    pid: z.string().regex(/^\d+$/, "PID must be a numeric string").refine((val) => {
      const number = parseInt(val, 10);
      return number >= 1;
    }, "PID must be greater than or equal to 1")
  })
});

export const pqueryParam = z.object({
    params: z.object({
        pquery: z.string().min(3, "Pquery must be at least 3 characters long"),
    })
  });
