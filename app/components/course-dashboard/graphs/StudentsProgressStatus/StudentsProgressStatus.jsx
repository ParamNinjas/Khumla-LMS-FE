"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Behind", "On Track"],
  datasets: [
    {
      label: "# of Progress Status",
      data: [12, 19],
      backgroundColor: ["red", "green"],
      borderColor: ["red", "green"],
      borderWidth: 1,
    },
  ],
};

export function StudentsProgressStatus() {
  return <Pie data={data} />;
}
