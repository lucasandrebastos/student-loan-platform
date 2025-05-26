import { z } from "zod";
export declare const createStudentSchema: z.ZodObject<{
    name: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    lastName: string;
    email: string;
    password: string;
}, {
    name: string;
    lastName: string;
    email: string;
    password: string;
}>;
export type CreateStudentInput = z.infer<typeof createStudentSchema>;
export declare const createStudentResponseSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    email: z.ZodString;
    lastName: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    lastName: string;
    email: string;
    id: string;
}, {
    name: string;
    lastName: string;
    email: string;
    id: string;
}>;
export declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export type LoginInput = z.infer<typeof loginSchema>;
export declare const getMeSchema: z.ZodObject<{
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
}, {
    email: string;
}>;
export type GetMeInput = z.infer<typeof getMeSchema>;
export declare const putMeSchema: z.ZodObject<{
    email: z.ZodString;
    name: z.ZodString;
    lastName: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    lastName: string;
    email: string;
    password: string;
}, {
    name: string;
    lastName: string;
    email: string;
    password: string;
}>;
export type PutMeInput = z.infer<typeof putMeSchema>;
