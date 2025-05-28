import { z } from "zod";

export const createStudentSchema = z.object({
  name: z.string().min(1, "Name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email format").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export type CreateStudentInput = z.infer<typeof createStudentSchema>;

export const createStudentResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  lastName: z.string(),
});

export const getMeSchema = z.object({
  email: z.string().email("Invalid email format").min(1, "Email is required"),
});

export type GetMeInput = z.infer<typeof getMeSchema>;

export const putMeSchema = z.object({
  name: z.string().min(1, "Name is required"),
  lastName: z.string().min(1, "Last name is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export type PutMeInput = z.infer<typeof putMeSchema>;
// export const loginResponseSchema = z.object({ accessToken: z.string() });
