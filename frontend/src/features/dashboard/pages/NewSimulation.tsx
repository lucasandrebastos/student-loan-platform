import axiosClient from "@/api/apiClient";
import { calculatePMT } from "@/utils/calculatePMT";
import { useState } from "react";
import { useForm } from "react-hook-form";

type NewSimulationData = {
  total_value: number;
  number_of_installments: number;
  monthly_interest: number;
};

export default function NewSimulation() {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, watch, reset } = useForm<NewSimulationData>();

  const onSubmit = (data: NewSimulationData) => {
    const response = axiosClient.post("/simulations", data);
    console.log("Response:", response);
    setIsLoading(true);
    reset();
  };

  const totalValue = watch("total_value");
  const numberOfInstallments = watch("number_of_installments");
  const monthlyInterest = watch("monthly_interest");

  const PMT = calculatePMT(totalValue, numberOfInstallments, monthlyInterest);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">
          New Financing Simulation
        </h2>
        <p className="text-gray-600 mt-2">
          Create a new loan simulation to explore your financing options
        </p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Simulation Details
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Enter the details for your financing simulation
          </p>
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Loan Amount ($)
                </label>
                <input
                  type="number"
                  id="amount"
                  placeholder="25000"
                  {...register("total_value", { required: true, min: 1 })}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="duration"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Duration (months)
                </label>
                <select
                  id="duration"
                  {...register("number_of_installments", {
                    required: true,
                  })}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">Select duration</option>
                  <option value="12">12 months</option>
                  <option value="24">24 months</option>
                  <option value="36">36 months</option>
                  <option value="48">48 months</option>
                  <option value="60">60 months</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="interestRate"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Interest Rate (%)
                </label>
                <input
                  type="number"
                  id="interestRate"
                  step="0.1"
                  placeholder="4.5"
                  {...register("monthly_interest", {
                    required: true,
                    min: 0,
                  })}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
              {PMT > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2"></label>
                  <span>{PMT.toFixed(2)}</span>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Create Simulation
              </button>
              <button
                onClick={() => reset()}
                type="button"
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
              >
                Clear Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
