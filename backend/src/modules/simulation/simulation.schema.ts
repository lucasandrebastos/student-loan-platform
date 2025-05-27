import { z } from "zod";

export const createSimulationSchema = z.object({
  total_value: z.number(),
  number_of_installments: z.number(),
  monthly_interest: z.number(),
});

export const updateSimulationSchema = z.object({
  total_value: z.number(),
  number_of_installments: z.number(),
  monthly_interest: z.number(),
  studentId: z.string().uuid("Invalid student ID format"),
  id: z.string().uuid("Invalid simulation ID format"),
});

export type UpdateSimulationInput = z.infer<typeof updateSimulationSchema>;
export type CreateSimulationInput = z.infer<typeof createSimulationSchema>;
