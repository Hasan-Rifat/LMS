import { z } from "zod";

// Define validation schema for the User model
const registration = z.object({
  body: z.object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
    role: z.string(),
    isVerified: z.boolean(),
  }),
});

const update = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    password: z.string().optional(),
    role: z.string().optional(),
    isVerified: z.boolean().optional(),
  }),
});

export const UserValidation = {
  registration,
  update,
};
