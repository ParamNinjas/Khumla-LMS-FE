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
  BarElement
);

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function AvgTimeAssessmentsQuizzes() {
  const data = () => {
    return {
      labels: labels,
      datasets: [
        {
          label: "Average Assessments",
          data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
          backgroundColor: "rgb(0 209 255)",
          barPercentage: 0.4,
          borderRadius: 10,
        },
        {
          label: "Average Quizzes",
          data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
          backgroundColor: "rgb(145 21 243)",
          barPercentage: 0.4,
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
