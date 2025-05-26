"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putMeSchema = exports.getMeSchema = exports.loginSchema = exports.createStudentResponseSchema = exports.createStudentSchema = void 0;
const zod_1 = require("zod");
exports.createStudentSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name is required"),
    lastName: zod_1.z.string().min(1, "Last name is required"),
    email: zod_1.z.string().email("Invalid email format").min(1, "Email is required"),
    password: zod_1.z.string().min(6, "Password must be at least 6 characters long"),
});
exports.createStudentResponseSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    email: zod_1.z.string(),
    lastName: zod_1.z.string(),
});
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.string().email("Invalid email format").min(1, "Email is required"),
    password: zod_1.z.string().min(6, "Password must be at least 6 characters long"),
});
exports.getMeSchema = zod_1.z.object({
    email: zod_1.z.string().email("Invalid email format").min(1, "Email is required"),
});
exports.putMeSchema = zod_1.z.object({
    email: zod_1.z.string().email("Invalid email format").min(1, "Email is required"),
    name: zod_1.z.string().min(1, "Name is required"),
    lastName: zod_1.z.string().min(1, "Last name is required"),
    password: zod_1.z.string().min(6, "Password must be at least 6 characters long"),
});
// export const loginResponseSchema = z.object({ accessToken: z.string() });
