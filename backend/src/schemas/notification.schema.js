import { z } from "zod";

export const nidParam = z.object({
  params: z.object({
    nid: z
      .string()
      .regex(/^\d+$/, "NID must be a numeric string")
      .refine((val) => {
        const number = parseInt(val, 10);
        return number >= 1;
      }, "NID must be greater than or equal to 1"),
  }),
});

export const createNotificationSchema = z.object({
  body: z.object({
    content: z.string().min(1, "Content is required"),
    user_id: z
      .string()
      .regex(/^\d+$/, "UID must be a numeric string")
      .refine((val) => {
        const number = parseInt(val, 10);
        return number >= 1;
      }, "UID must be greater than or equal to 1"),
  }),
});

export const updateNotificationSchema = z.object({
  body: z.object({
    read: z.boolean()
  }),
});
