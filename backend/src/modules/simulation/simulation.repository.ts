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

  async getLastSimulations(id: string) {
    const lastSimulations = await prisma.simulation.findMany({
      where: { studentId: id },
      orderBy: { createdAt: "desc" },
      take: 5,
    });
    return lastSimulations;
  },

  async getTotalSimulations(id: string) {
    const totalSimulations = await prisma.simulation.count({
      where: { studentId: id },
    });

    return totalSimulations;
  },

  async getAvaregeInstallment(id: string) {
    const averageInstallment = await prisma.simulation.aggregate({
      where: { studentId: id },
      _avg: { monthly_installment_amount: true },
    });
    return averageInstallment;
  },
  async getChartData(id: string) {
    const chartData = await prisma.$queryRaw`
  SELECT
    TO_CHAR("createdAt", 'YYYY-MM') as month,
    SUM("total_value") as totalValue
  FROM "Simulation"
  WHERE "studentId" = ${id}
  GROUP BY month
  ORDER BY month;
`;
    return chartData;
  },
};
