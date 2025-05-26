import { z } from "zod";
export declare const createSimulationSchema: z.ZodObject<{
    total_value: z.ZodNumber;
    number_of_installments: z.ZodNumber;
    monthly_interest: z.ZodNumber;
    studentId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    total_value: number;
    number_of_installments: number;
    monthly_interest: number;
    studentId: string;
}, {
    total_value: number;
    number_of_installments: number;
    monthly_interest: number;
    studentId: string;
}>;
export declare const updateSimulationSchema: z.ZodObject<{
    total_value: z.ZodNumber;
    number_of_installments: z.ZodNumber;
    monthly_interest: z.ZodNumber;
    studentId: z.ZodString;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    total_value: number;
    number_of_installments: number;
    monthly_interest: number;
    studentId: string;
}, {
    id: string;
    total_value: number;
    number_of_installments: number;
    monthly_interest: number;
    studentId: string;
}>;
export type UpdateSimulationInput = z.infer<typeof updateSimulationSchema>;
export type CreateSimulationInput = z.infer<typeof createSimulationSchema>;
