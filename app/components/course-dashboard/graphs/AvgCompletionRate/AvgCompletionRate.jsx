"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function AvgCompletionRate() {
  const data = () => {
    return {
      labels: labels,
      datasets: [
        {
          label: "% of Completion Rate",
          data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
          fill: "start",
          pointRadius: 2,
          lineTension: 0.4,
          borderWidth: 3,
          backgroundColor: (context) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, "rgba(145, 21, 243, 0.3)");
            gradient.addColorStop(1, "rgb(33, 138, 253)");
            return gradient;
          },
          borderColor: "rgba(75,192,192,1)",
        }
      ],
    };
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => value + "%",
        },
      },
    },
  };

  return (
    <div>
      <Line data={data()} options={options} />
    </div>
  );
}
