import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useMemo } from "react";
import type { SimulationsStats } from "@/types/dashboard";

const SimulationChart = ({ data }: SimulationsStats) => {
  const formattedData = useMemo(() => {
    return data?.map((item) => {
      const [year, month] = item.month.split("-");
      const date = new Date(parseInt(year), parseInt(month) - 1);
      const label = date.toLocaleDateString("pt-BR", {
        month: "short",
        year: "numeric",
      });

      return {
        ...item,
        label,
      };
    });
  }, [data]);

  return (
    <div className="w-full h-96 bg-white rounded-lg border border-gray-200 shadow-sm p-8 ">
      <h2 className="text-xl font-semibold mb-4">
        Total Value of Simulations per Month
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip
            formatter={(value: number) => `R$ ${value.toLocaleString("pt-BR")}`}
          />
          <Line
            type="monotone"
            dataKey="totalvalue"
            stroke="#4bc0c0"
            strokeWidth={2}
            dot={{ r: 5 }}
            activeDot={{ r: 7 }}
            name="Total Financiado (R$)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimulationChart;
