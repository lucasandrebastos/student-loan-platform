"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSimulationSchema = exports.createSimulationSchema = void 0;
const zod_1 = require("zod");
exports.createSimulationSchema = zod_1.z.object({
    total_value: zod_1.z.number(),
    number_of_installments: zod_1.z.number(),
    monthly_interest: zod_1.z.number(),
    studentId: zod_1.z.string().uuid("Invalid student ID format"),
});
exports.updateSimulationSchema = zod_1.z.object({
    total_value: zod_1.z.number(),
    number_of_installments: zod_1.z.number(),
    monthly_interest: zod_1.z.number(),
    studentId: zod_1.z.string().uuid("Invalid student ID format"),
    id: zod_1.z.string().uuid("Invalid simulation ID format"),
});
