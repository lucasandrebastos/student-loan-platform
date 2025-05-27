import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Simulations {
  simulations: Simulation[];
}

interface Simulation {
  id: string;
  studentId: string;
  total_value: number;
  number_of_installments: number;
  monthly_interest: number;
  monthly_installment_amount: number;
  createdAt: Date;
}

interface SimulationState {
  data: Simulation[];
  loading: boolean;
  error: string | null;
}

const initialState: SimulationState = {
  data: [],
  loading: false,
  error: null,
};

const simulationSlice = createSlice({
  name: "simulation",
  initialState,
  reducers: {
    fetchSimulationsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchSimulationsSuccess(state, action: PayloadAction<Simulation[]>) {
      state.data = action.payload;
      state.loading = false;
    },
    fetchSimulationsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchSimulationsStart,
  fetchSimulationsSuccess,
  fetchSimulationsFailure,
} = simulationSlice.actions;

export default simulationSlice.reducer;
