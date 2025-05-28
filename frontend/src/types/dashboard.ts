export interface Simulation {
  id: string;
  studentId: string;
  total_value: number;
  number_of_installments: number;
  monthly_interest: number;
  monthly_installment_amount: number;
  createdAt: string;
}

export interface ChartData {
  month: string;
  totalvalue: number;
}

export interface SimulationsStats {
  data: ChartData[] | undefined;
}
export interface DashboardData {
  recentSimulations: Simulation[];
  summary: {
    totalSimulations: number;
    averageInstallment: {
      _avg: {
        monthly_installment_amount: number;
      };
    };
  };
  chartData: ChartData[];
}
