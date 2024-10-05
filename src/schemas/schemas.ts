import { z } from "zod";

export const FormSchema = z.object({
  email: z.string().trim().min(1, { message: "Email is required" }).email({
    message: "Email not valid",
  }),
  password: z
    .string()
    .trim()
    .min(1, { message: "Password is required" })
    .min(5, {
      message: "Password must be at least 5 characters long",
    }),
  name: z.string().trim().min(1, { message: "Name is required" }).min(3, {
    message: "Name must be at least 3 characters long",
  }),
});
