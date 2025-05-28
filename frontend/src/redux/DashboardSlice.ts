import type { DashboardData } from "@/types/dashboard";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Simulation {
  id: string;
  studentId: string;
  total_value: number;
  number_of_installments: number;
  monthly_interest: number;
  monthly_installment_amount: number;
  createdAt: Date;
}

// interface DashboardState {
//   data: Simulation[];
//   loading: boolean;
//   error: string | null;
// }

// const initialState: DashboardState = {
//   data: [],
//   loading: false,
//   error: null,
// };

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: null as DashboardData | null,
  reducers: {
    setDashboard: (_, action: PayloadAction<DashboardData>) => action.payload,
  },
});

export const { setDashboard } = dashboardSlice.actions;
export default dashboardSlice.reducer;
