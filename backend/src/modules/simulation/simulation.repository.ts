import prisma from "../../utils/prisma";

export const simulationRepository = {
  async createSimulation(
    total_value: number,
    number_of_installments: number,
    monthly_interest: number,
    monthly_installment_amount: number,
    studentId: string
  ) {
    const simulation = await prisma.simulation.create({
      data: {
        total_value,
        number_of_installments,
        monthly_interest,
        studentId,
        monthly_installment_amount,
      },
    });
    return simulation;
  },
};
