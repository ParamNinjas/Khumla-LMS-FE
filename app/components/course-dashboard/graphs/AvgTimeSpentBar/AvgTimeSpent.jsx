"use client";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarElement,
} from "chart.js";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarElement,
);

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function AvgTimeSpent() {
  const data = () => {
    return {
      labels: labels,
      datasets: [
        {
          label: "Average Hours Spent",
          data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
          fill: "start",
          pointRadius: 2,
          lineTension: 0.4,
          borderWidth: 1,
          backgroundColor: (context) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, "rgb(33, 138, 253)");
            gradient.addColorStop(1, "rgba(145, 21, 243, 0.3)");
            return gradient;
          },
          borderColor: "rgba(75,192,192,1)",
          barPercentage: 0.3,
          borderRadius: 10,
        },
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
          callback: (value) => value + "hr",
        },
      },
    },
  };

  return <Bar options={options} data={data()} />;
}


