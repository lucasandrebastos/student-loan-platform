import { createBrowserRouter } from "react-router";
import AuthPlatform from "./features/auth/pages/auth-platform";
import Profile from "./features/dashboard/pages/Profile";
import AppLayout from "./AppLayout";
import StudentFinancingDashboard from "./features/dashboard/pages/student-dashboard";
import NewSimulation from "./features/dashboard/pages/NewSimulation";
import History from "./features/dashboard/pages/History";
import PrivateRoute from "./features/PrivateRoute";

export const router = createBrowserRouter([
  {
    Component: PrivateRoute,
    children: [
      {
        Component: AppLayout,
        children: [
          { path: "/dashboard", Component: StudentFinancingDashboard },
          {
            path: "/profile",
            Component: Profile,
          },
          {
            path: "/new-simulation",
            Component: NewSimulation,
          },
          {
            path: "/history",
            Component: History,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    Component: AuthPlatform,
  },
]);
