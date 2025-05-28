import { getProfile } from "@/api/services/authService";
import { getDashboard } from "@/api/services/dashboardService";

import { setDashboard } from "@/redux/DashboardSlice";
import { setUser } from "@/redux/UserSlice";
import type { RootState } from "@/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import SimulationChart from "@/components/Chart/SimulationChart";

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);
  const dashboard = useSelector((state: RootState) => state.dashboard);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await getDashboard();

        dispatch(setDashboard(response));
      } catch (err) {
        console.error("Erro ao buscar dados do usuário", err);
        navigate("/login");
      }
    };
    const fetchUser = async () => {
      try {
        const profile = await getProfile();
        dispatch(setUser(profile));
      } catch (err) {
        console.error("Erro ao buscar dados do usuário", err);
        navigate("/login");
      }
    };
    fetchStats();
    fetchUser();
  }, [dispatch]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">
          Welcome back, {user && user.name}!
        </h2>
        <p className="text-gray-600 mt-2">
          Here's an overview of your financing simulations
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Total Simulations
              </p>
              <p className="text-2xl font-bold text-gray-900 mt-2">
                {dashboard?.recentSimulations.length}
              </p>
              <p className="text-xs text-gray-500 mt-1">+2 from last month</p>
            </div>
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-4 h-4 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Average Loan Amount
              </p>
              <p className="text-2xl font-bold text-gray-900 mt-2">
                $
                {dashboard?.summary.averageInstallment._avg
                  .monthly_installment_amount &&
                  dashboard?.summary.averageInstallment._avg.monthly_installment_amount.toLocaleString()}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Across all simulations
              </p>
            </div>
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-4 h-4 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Approved Simulations
              </p>
              <p className="text-2xl font-bold text-gray-900 mt-2">
                {dashboard?.recentSimulations.length}
              </p>
              <p className="text-xs text-gray-500 mt-1">67% approval rate</p>
            </div>
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-4 h-4 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Total Financed
              </p>
              <p className="text-2xl font-bold text-gray-900 mt-2">
                $
                {dashboard?.summary.averageInstallment._avg
                  .monthly_installment_amount &&
                  dashboard?.summary.averageInstallment._avg.monthly_installment_amount.toLocaleString()}
              </p>
              <p className="text-xs text-gray-500 mt-1">Lifetime total</p>
            </div>
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-4 h-4 text-orange-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path
                  fillRule="evenodd"
                  d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Recent Activity
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Your latest financing simulations
          </p>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {dashboard?.recentSimulations &&
              dashboard?.recentSimulations.map((sim) => (
                <div
                  key={sim.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <div>
                      <p className="font-medium text-gray-900">
                        $
                        {sim.monthly_installment_amount &&
                          sim.monthly_installment_amount.toLocaleString()}{" "}
                        loan simulation
                      </p>
                      <p className="text-sm text-gray-600">
                        {sim.createdAt &&
                          new Date(sim.createdAt).toLocaleDateString()}{" "}
                        •{" "}
                        {sim.number_of_installments &&
                          sim.number_of_installments}{" "}
                        months
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* CHART */}

      <SimulationChart data={dashboard?.chartData} />
    </div>
  );
}
