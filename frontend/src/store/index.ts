import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/AuthSlice";
import userReducer from "../redux/UserSlice";
import simulationsReducer from "../redux/SimulationsSlice";
import dashboardReducer from "../redux/DashboardSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    simulations: simulationsReducer,
    dashboard: dashboardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
