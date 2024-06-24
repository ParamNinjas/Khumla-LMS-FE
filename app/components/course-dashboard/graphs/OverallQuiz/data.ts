import { faker } from "@faker-js/faker";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const barDescriptions = [
  { description: "Quiz Attempts over time", color: "rgb(145 21 243)" },
];

export const data = {
  labels: labels,
  datasets: [
    {
      label: "No of Quiz Attempts",
      data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
      borderColor: "rgb(145 21 243)",
      backgroundColor: "rgb(145 21 243)",
      pointRadius: 2,
      lineTension: 0.4,
      borderWidth: 3,
    },
  ],
};
