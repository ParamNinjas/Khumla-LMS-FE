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
  { description: "Average assessment % over time", color: "rgb(0 209 255)" },
  { description: "Average quizzes % over time", color: "rgb(145 21 243)" },
];

export const data = {
  labels,
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
