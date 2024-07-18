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

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function StudentsAvgPercentage() {
  const data = () => {
    return {
      labels: labels,
      datasets: [
        {
          label: "Students' Average Percentage",
          data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
          borderColor: "rgb(145 21 243)",
          backgroundColor: "rgb(145 21 243)",
          pointRadius: 2,
          lineTension: 0.4,
          borderWidth: 3,
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
